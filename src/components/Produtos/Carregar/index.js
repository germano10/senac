import React, {useState, useEffect, useCallback} from 'react';
import Swal from 'sweetalert2'

import { Input, Container, Textarea, Button, Form } from './styles';

const Carregar = () => {

    const btnSalvaEdit = document.getElementsByName("salvaEditar")[0];
    const btnGatilho = document.getElementsByName("gatilho")[0];
    
    var initValue = {
        sku: "",
        nome: "",
        descricao: "",
        preco: "",
        quantidade: "",
        imagem: "",
    }

    const [id, setId] = useState('');
    const [dadosProduto, setDadosProduto] = useState(initValue);
    const [arrayProdutos, setArrayProdutos] = useState(JSON.parse(localStorage.getItem('produtos')));

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
            setDadosProduto({
                ...dadosProduto,
                [e.target.name]: e.target.value
            })
        },
        [dadosProduto],
    );

    const verificaInput = () => {
        var input = document.querySelectorAll('input, textarea');

        for(var i = 0; i < input.length; i++){
            let nomeCampo = input[i].name;
            if(!input[i].value.trim()){
                msg(`O campo ${nomeCampo} está vazio!`);
                input[i].focus();
                return false;
            }
        }

        return true;
    }

    useEffect(() => {
        var arrayProdutos = JSON.parse(localStorage.getItem("produtos"));
        if(arrayProdutos != null){
            var idProduto = window.location.href.split("/")[4];
            if(idProduto != null || idProduto != undefined){
                setId(idProduto);
                setDadosProduto(arrayProdutos[idProduto]);
                initValue = {
                    sku: dadosProduto.sku,
                    nome: dadosProduto.nome,
                    descricao: dadosProduto.descricao,
                    preco: dadosProduto.preco,
                    quantidade: dadosProduto.quantidade,
                    imagem: dadosProduto.imagem,
                }
            }
        }
    }, []);

    const edit = () => {
        btnGatilho.setAttribute("disabled","disabled");
        btnGatilho.setAttribute("hidden","hidden");

        btnSalvaEdit.removeAttribute('disabled');
        btnSalvaEdit.removeAttribute('hidden');

        var inputs = document.querySelectorAll('input, textarea');

        for(var i = 0; i < inputs.length; i++){
            if(inputs[i].name !== "sku"){
                inputs[i].removeAttribute("disabled");
                inputs[i].style.border = "1px solid #CCC";
                inputs[i].style.background = "#FFF";
                inputs[i].style['font-weight'] = 'normal';
                inputs[i].style.padding = 5;
            }
        }
    }

    const msg = (msg) => {
        return(
            Swal.fire({
                title: 'Error!',
                text: msg,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        )
    }

    const submit = (e) => {
        e.preventDefault();
        if(verificaInput()){
            arrayProdutos[id] = dadosProduto;
            localStorage.removeItem("produtos");
            localStorage.setItem("produtos", JSON.stringify(arrayProdutos));

            btnGatilho.removeAttribute("disabled");
            btnGatilho.removeAttribute("hidden");

            btnSalvaEdit.setAttribute('disabled', 'disabled');
            btnSalvaEdit.setAttribute('hidden', 'hidden');
            
            var inputs = document.querySelectorAll('input, textarea');

            for(var i = 0; i < inputs.length; i++){
                if(inputs[i].name !== "sku"){
                    inputs[i].setAttribute("disabled","disabled");
                    inputs[i].style.border = "none";
                    inputs[i].style.background = "#CCC";
                    inputs[i].style['font-weight'] = 'bold';
                    inputs[i].style.padding = 10;
                }
            }
        }
    }

    return (
        <Container>
            <h3>Produto: {dadosProduto.nome}</h3>

            <Form onSubmit={submit}>
                <Input name="sku" disabled value={dadosProduto.sku} />
                <Input onChange={change} disabled name="nome"  value={dadosProduto.nome} />
                <Textarea onChange={change} disabled name="descricao"  value={dadosProduto.descricao} />
                <Input onChange={change} onKeyUp={formataCampo} disabled name="preco"  value={dadosProduto.preco} />
                <Input onChange={change} disabled name="quantidade"  value={dadosProduto.quantidade} />
                <Input onChange={change} disabled name="imagem"  value={dadosProduto.imagem} />

                <Button name="salvaEditar" hidden disabled>Salvar Edição</Button>
            </Form>

            <Button name="gatilho" onClick={edit}>Editar</Button>
        </Container>
    )
}

export default Carregar;