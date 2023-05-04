import React from 'react';

import ReactDom from 'react-dom';

import App from './App';

import { AppProvider } from "./context/useContext";

import './style/index.css';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDom.render(

    <AppProvider>
        <App />
    </AppProvider>
    , document.getElementById('root'))