import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from '../store/configureStore';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';

const TodoApp = (props) => (
  <div>
    <h1>Todos</h1>
    <div>
      <AddTodo />
      <TodoList />
      { props.children }
      <Footer />
    </div>
  </div>
);

const About = () => (
  <div>
    <h1>About</h1>
  </div>
);

export default () => {
  return (
  <Provider store={ configureStore() }>
    <Router history={ browserHistory }>
      <Route path='/' component={ TodoApp }>
        <Route path='about' component={ About } />
      </Route>
    </Router>
  </Provider>);
};
