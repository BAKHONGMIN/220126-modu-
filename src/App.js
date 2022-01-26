import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Gnb from './Gnb';
import './Gnb.css';
import { render } from '@testing-library/react';
import './reset.css';


function App(){

  return (
    <header id="hd">
      <div className="container">
        <h2><a href=""><img src="./IMG/IMG/header_logo.png" alt="" /></a></h2>
        <Gnb></Gnb>
      </div>
    </header>
  )
                
}

export default App;



