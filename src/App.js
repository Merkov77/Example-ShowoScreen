import React, { Component } from 'react';
import ShowoScreen from './components/showoscreen';
import Showo from './components/showo';
import WebMain from './components/main';
import './App.css';

const Presentation = () => {
  return(
    <ShowoScreen>
      <Showo bg="#9C6BD1">Ejemplo 1</Showo>
      <Showo bg="#FB5F5F">Ejemplo 2</Showo>
      <Showo bg="#88FB5F" fg="#202020">Ejemplo 3</Showo>
      <Showo bg="#FBCC5F">Ejemplo 4</Showo>
      <Showo bg="#404040">Ejemplo 5</Showo>
    </ShowoScreen>
  )
}

const App = () => <WebMain show={<Presentation/>}/>
 

export default App;
