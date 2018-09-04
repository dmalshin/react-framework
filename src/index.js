import './styles/index.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import registerServiceWorker from './lib/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
