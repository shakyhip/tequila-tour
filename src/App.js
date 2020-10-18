import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './containers/Main';
import Foodie from './containers/Foodie';
import Hospedaje from './containers/Hospedaje';
import Fabricas from './containers/Fabricas';
import Actividades from './containers/Actividades';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/foodie" component={Foodie}/>
        <Route exact path="/hospedaje" component={Hospedaje} />
        <Route exact path="/actividades" component={Actividades} />
        <Route exact path="/fabricas" component={Fabricas} />
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
