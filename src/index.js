import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {Container, Logo} from "./style";
import ScaleSystems from "./assets/logo-scale-system.jpg";

ReactDOM.render(
  <React.StrictMode>
      <Container>
          <Logo src={ScaleSystems} alt="logo"/>
          <App />
      </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
