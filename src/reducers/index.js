import { createStore, combineReducers } from 'redux';
import DevTools from '../containers/DevTools';
import todos from './TodoApp/Todos';
import visibilityFilter from './TodoApp/VisibilityFilter';


const rootReducer = combineReducers({
  todos,
  visibilityFilter
});

export default rootReducer;
