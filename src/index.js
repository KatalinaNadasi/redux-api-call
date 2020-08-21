import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Box from './component/box';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

function App() {
  return (
    <Box color='cadetblue' />
  );
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
