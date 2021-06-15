import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {ProvideRooms} from './context/rooms/RoomsContext'

ReactDOM.render(
  <React.StrictMode>
    <ProvideRooms>
      <Router>
        <App />
      </Router>
    </ProvideRooms>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
