import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import App from './App.js'; // import the main app component
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppStore from './redux/reducers';


let store = createStore(AppStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);