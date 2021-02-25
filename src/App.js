import React from 'react';
import Sidebar from './Components/sidebar';
import Routes from './routes';
import Cabecalho from './Components/header';
import Rodape from './Components/footer';
import './global.css';


function App() {
  return (
    <div>
      <div className="App" id="app">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap">
        <Cabecalho />
        <Routes />
        <Rodape />
        </div>
      </div>
    </div>
  );
}

export default App;
