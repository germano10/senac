import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Menu} from './styles';

import Cadastro from './components/Produtos/Cadastro/index';
import Lista from './components/Produtos/Lista/index';

function App() {
  return (
    <div>
      <Menu>
        <Link to="/">Lista de Produtos</Link>
        <Link to="/cadastro">Cadastrar Produto</Link>
      </Menu>
      <Switch>
        {/* <Route path="/cadastro/:id">
          <ViewCadastro />
        </Route> */}
        <Route path="/cadastro">
          <Cadastro />
        </Route>

        <Route path="/">
          <Lista />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
