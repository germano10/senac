import React, {useState, useCallback} from 'react';

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

    const [value, setValue] = useState(initValue);
    const [arrayItens, setArrayItens] = useState([])

    const change = useCallback((e) => {
            setValue({
                ...value,
                [e.target.name]: e.target.value
            })
        },
        [value],
    );

    const verificaInput = () => {
        if(!value.descricao.trim() || !value.imagem.trim() || !value.nome.trim() || !value.preco.trim() || !value.quantidade.trim() || !value.sku.trim()){
            return false;
        }

        return true;
    }

    const verifica = () => {
        var err = 0;

        arrayItens.forEach((item) => {
            if(item.sku === value.sku){
                err++
            }
        });

        if(err > 0){
            return false
        }

        return true;
    }

    const submit = useCallback((e) => {
        e.preventDefault();
        if(verificaInput()){
            if(verifica()){
                arrayItens.push(value);
                setValue(initValue);
            }else{
                alert("Ops! esse SKU já está cadastrado");
            }
        }else{
            alert("Ops! Existem campos vazios");
        }
    })
 
    return (
        <Container>
            <h3>Cadastro</h3>

            <Form onSubmit={submit}>
                <Input required onChange={change} name="sku" value={value.sku} placeholder="SKU" />
                <Input required onChange={change} name="nome" value={value.nome} placeholder="Nome do Produto" />
                <Textarea rows="5" required onChange={change} name="descricao" value={value.descricao} placeholder="Descrição" />
                <Input type="number" placeholder="Preço" onChange={change} name="preco" value={value.preco}/>
                <Input type="number" required onChange={change} name="quantidade" value={value.quantidade} placeholder="Quantidade" />
                <Input required onChange={change} name="imagem" value={value.imagem} placeholder="Imagem" />

                <Button>Cadastrar</Button>
            </Form>
        </Container>
    )
}

export default Cadastro;