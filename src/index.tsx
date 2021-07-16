import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    black: '#1D242B',
    grey: '#F1F6F9',
    white: '#ffffff',
    liniar1: '-webkit-linear-gradient(135deg, #000428, #0f9b0f);',
    liniar2: 'linear-gradient(135deg, #000428, #0f9b0f);',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
