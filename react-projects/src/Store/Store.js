import {  createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../Reducers/RootReducer';

const middleWare = [ thunkMiddleware ];

const store = createStore (rootReducer,
   composeWithDevTools( applyMiddleware(...middleWare))
);

export default store;
