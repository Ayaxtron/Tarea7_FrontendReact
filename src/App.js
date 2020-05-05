import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import Home from './components/pages/Home';
//import About from './components/pages/About';

//import MovieIndex from './components/movies/Index';
//import MovieShow from './components/movies/Show';

import Radiante from './Cortes/Forma/radiante.png'
import Trillon from './Cortes/Forma/trillon.png'
import Baguette from './Cortes/Forma/baguette.png';
import Cojin from './Cortes/Forma/cojijn.png';
import Corazon from './Cortes/Forma/corazon.png';
import Asscher from './Cortes/Forma/asscher.png';
import Pera from './Cortes/Forma/pera.png';
import Marquesa from './Cortes/Forma/marquesa.png';
import Ovalo from './Cortes/Forma/ovalo.png';
import Esmeralda from './Cortes/Forma/esmeralda.png';
import Princesa from './Cortes/Forma/princesa.png';
import Redondo from './Cortes/Forma/redondo.png';

import ImperfeccionesSimple from './Cortes/Claridad/imperfecciones-simple-vista.png';
import Imperfecciones10 from './Cortes/Claridad/imperfecciones-10x.png';
import ImperfeccionesNoVisibles from './Cortes/Claridad/imperfecciones-no-visibles.png';
import Perfecta from './Cortes/Claridad/perfecta.png';

import Amarillo from './Cortes/Color/amarillo-claro.png';
import LigeramenteAmarillo from './Cortes/Color/ligeramente-amarillo.png';
import CasiIncoloro from './Cortes/Color/casi-incoloro.png';
import Incoloro from './Cortes/Color/incoloro.png';

import Regular from './Cortes/Corte/regular.png';
import Bueno from './Cortes/Corte/bueno.png';
import MuyBueno from './Cortes/Corte/muy-bueno.png';
import Excelente from './Cortes/Corte/excelente.png';

import Grande from './Cortes/Quilataje/grande.png'
import Pequeno from './Cortes/Quilataje/pequeno.png'

import Filter from './components/buttons/Filter'
import { makeStyles } from '@material-ui/core/styles';
import Button from './components/buttons/Button'
import Slider from './components/buttons/Slider'

const form_image = [Redondo, Princesa, Esmeralda, Ovalo, Marquesa, Pera, Asscher, Corazon, Cojin, Baguette, Trillon, Radiante];
const form_label = ['Redondo', 'Princesa', 'Esmeralda', 'Ovalo', 'Marquesa', 'Pera', 'Asscher', 'Corazon', 'Cojin', 'Baguette', 'Trillon', 'Radiante'];
const color_image = [Incoloro, CasiIncoloro, Amarillo, LigeramenteAmarillo];
const color_label = ['Transparente', 'Casi Incoloro', 'Ligeramente Amarillo', 'Amarillo Claro'];
const clarity_image = [Perfecta, ImperfeccionesNoVisibles, Imperfecciones10, ImperfeccionesSimple];
const clarity_label = ['Perfecta', 'Imperfecciones no visibles', 'Imperfecciones visibles a 10x', 'Imperefecciones visibles a simple vista'];
const cut_image = [Excelente, MuyBueno, Bueno, Regular]
const cut_label = ['Excelente', 'Muy Bueno', 'Bueno', 'Regular']


function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      /*margin: 'auto',*/
      maxWidth: 900,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Filter title="Forma" images={form_image} labels={form_label} classes={classes}/>
      <Filter title="Color" images={color_image} labels={color_label} classes={classes}/>
      <Filter title="Claridad" images={clarity_image} labels={clarity_label} classes={classes}/>
      <Filter title="Corte" images={cut_image} labels={cut_label} classes={classes}/>
      <Slider title="Quilataje"/>
      <Slider title="Precio"/>
      <Button label="BUSCAR" variant="contained"/>
      <Button label="LIMPIAR FILTROS" variant="outlined"/>
    </>
  )
}

export default App;


/*
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <div className="menu">
            Menu: 
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/movies">
                <MovieIndex />
              </Route>
              <Route path="/movies/:episode_id">
                <MovieShow />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

*/