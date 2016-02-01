import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import DevTools from '../containers/DevTools'; // TODO: Handle for Prod

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';


const TodoApp = () => (
  <div>
    <h1>Todos</h1>
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  </div>
);

export default () => {
  return(
  <Provider store={configureStore()}>
    <div>
      <TodoApp />
      <DevTools />
    </div>
  </Provider>);
}
