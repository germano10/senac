import React, {useState, useCallback} from 'react';
import Swal from 'sweetalert2'

import {Container, Form, Input, Textarea, Button} from './styles';

const Cadastro = () => {

    const initValue = {
        sku: "",
        nome: "",
        descricao: "",
        preco: "",
        quantidade: "",
        imagem: "",
    }

    const produtosList = JSON.parse(localStorage.getItem('produtos')) !== null ? JSON.parse(localStorage.getItem('produtos')) : {};

    const [value, setValue] = useState(initValue);
    const [arrayItens, setArrayItens] = useState(produtosList);

    const formataCampo = useCallback((e) => {
            let valor;
            valor = e.target.value;
            valor = valor.replace(/\D/g, "");
            valor = valor.replace(/(\d)(\d{2})$/, "$1,$2");
            valor = valor.replace(/(?=(\d{3})+(\D))\B/g,".");
            e.target.value = valor;
        },[],
    )

    const change = useCallback((e) => {
            setValue({
                ...value,
                [e.target.name]: e.target.value
            })
        },
        [value],
    );

    const verificaInput = () => {
        var input = document.querySelectorAll('input, textarea');

        for(var i = 0; i < input.length; i++){
            let nomeCampo = input[i].name;
            if(!input[i].value.trim()){
                input[i].focus();
                msg(`O campo ${nomeCampo} está vazio!`)
                return false;
            }
        }

        return true;
    }

    const verifica = () => {
        if(arrayItens !== null){
            let array = Object.keys(arrayItens);
            if(array.includes(value.sku)){
                return false
            }
            return true;
        }
        return true;
    }

    const submit = useCallback((e) => {
        e.preventDefault();
        if(verificaInput()){
            if(verifica()){
                let sku = value.sku;
                arrayItens[sku] = value
                localStorage.removeItem("produtos");
                localStorage.setItem("produtos", JSON.stringify(arrayItens));
                setValue(initValue);
                msg("Cadastrado com sucesso", "success", 'Sucesso!');
            }else{
                msg("Ops! esse SKU já está cadastrado");
            }
        }
    })

    const msg = (msg, type = "error", title = "Erro!") => {
        return(
            Swal.fire({
                title: title,
                text: msg,
                icon: type,
                confirmButtonText: 'Cool'
            })
        )
    }
 
    return (
        <Container>
            <h3>Cadastro</h3>

            <Form onSubmit={submit}>
                <Input required onChange={change} name="sku" value={value.sku} placeholder="SKU" />
                <Input required onChange={change} name="nome" value={value.nome} placeholder="Nome do Produto" />
                <Textarea rows="5" required onChange={change} name="descricao" value={value.descricao} placeholder="Descrição" />
                <Input placeholder="Preço" onKeyUp={formataCampo} onChange={change} name="preco" value={value.preco}/>
                <Input type="number" required onChange={change} name="quantidade" value={value.quantidade} placeholder="Quantidade" />
                <Input required onChange={change} name="imagem" value={value.imagem} placeholder="Imagem" />

                <Button>Cadastrar</Button>
            </Form>
        </Container>
    )
}

export default Cadastro;