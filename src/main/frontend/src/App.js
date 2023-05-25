// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Router from './Components/Router';


// function ImageBox() {
//   // let size = [props.state.x, props.state.y];
//   // let image = props.state.image_src;
// }

function App() {

  return (
    <>
      <Router />
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


export default Router;