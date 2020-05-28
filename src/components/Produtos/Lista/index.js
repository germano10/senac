import React from 'react';

import {Container} from './styles';

const Lista = () => {

    return (
        <Container>
            <h3>Lista de Produtos</h3>

            <table border="1">
                <tr>
                    <th>SKU</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th></th>
                </tr>
                <tr>
                    <td>5000</td>
                    <td>Ramesh Raman</td>
                    <td>R$ 50,00</td>
                    <td><a href="#">Editar</a></td>
                </tr>
                <tr>
                    <td>5000</td>
                    <td>Ramesh Raman</td>
                    <td>R$ 50,00</td>
                    <td><a href="#">Editar</a></td>
                </tr>
            </table>
        </Container>
    )
}

export default Lista;