import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import './css/iconfont.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


Component.prototype.axios = axios;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
