import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {ExternalContainer, GameContainer, Logo} from "./style";
import ScaleSystems from "./assets/logo-scale-system.jpg";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
  <React.StrictMode>
      <ExternalContainer>
          <GameContainer>
              <Logo src={ScaleSystems} alt="logo"/>
              <App />
          </GameContainer>
          <Footer/>
      </ExternalContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
