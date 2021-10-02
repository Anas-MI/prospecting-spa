/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// Import logger from "redux-logger";
import {rootReducer} from './reducers';

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
