import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './Store';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
