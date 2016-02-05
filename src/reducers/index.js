import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import todos from './TodoApp/Todos';
import visibilityFilter from './TodoApp/VisibilityFilter';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  routing: routeReducer
});

export default rootReducer;
