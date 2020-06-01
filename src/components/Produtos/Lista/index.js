import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

import { Container } from './styles';

const Lista = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        var dados = JSON.parse(localStorage.getItem('produtos'));
        if(dados != null){
            setData(Object.values(dados));
        }
    }, []);

    return (
        <Container>
            <h3>Lista de Produtos</h3>

            <table border="1">
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ?
                        data.map((item) => (
                            <tr>
                                <td>{item.sku}</td>
                                <td>{item.nome}</td>
                                <td>R$ {item.preco}</td>
                                <td><Link to={"/carregar/"+item.sku}>Editar</Link></td>
                            </tr>
                        ))
                        : null
                    }
                </tbody>
            </table>
        </Container>
    )
}

export default Lista;