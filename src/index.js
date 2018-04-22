import React from 'react';
import store from './store';
import ReactDOM from 'react-dom';
import App from './component/App';
import fixtures from './fixtures';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";

fixtures();

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
