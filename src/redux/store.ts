import { createStore, combineReducers } from 'redux';
import { countReducer } from './reducers';

const rootReducer = combineReducers(
  { home: countReducer }
)

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore