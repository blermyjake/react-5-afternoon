import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './index.css';

ReactDOM.render(<Provider store={store}>
<HashRouter>
    <App />
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

