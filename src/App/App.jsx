import React from 'react'
import ReactDOM from 'react-dom';
import Content from './Content.jsx'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer'

const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Content/>
    </Provider>,
    document.getElementById('app')
);
