import React from 'react' // syntax ES6 
import {render} from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import {Provider} from 'react-redux'

let initialState = {
    texts : [{
        text: 'text demo',
        completed: false,
        id: 0
    }]
};
let store = configureStore(initialState) ;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
