import { createStore, combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import DevTools from '../containers/DevTools';
import todos from './TodoApp/Todos';
import visibilityFilter from './TodoApp/VisibilityFilter';

// debugger

console.log(routeReducer);

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  routing: routeReducer
});

export default rootReducer;
