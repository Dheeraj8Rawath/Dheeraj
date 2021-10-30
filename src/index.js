import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import Navb from "./Navbar2"
import Slide from "./Slidshow"
import Boxx from "./Box"
// import Game from "./Usestate"
import Time from "./UseStateTime" 


ReactDOM.render(
  <>
  
  {/* <Game/> */}
  <Navb/>
  <Time/>
  <Slide/>
  <Boxx/>
 
  </>
  ,document.getElementById('demo')
);


