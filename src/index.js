import React from 'react'
import { render } from 'react-dom'
import {compose, createStore} from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers/index'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const isProduction = process.env.NODE_ENV !== 'production';

const composeEnhancers =
    isProduction && typeof window === 'object' && reduxDevtools
        ? reduxDevtools({ shouldHotReload: false })
        : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)