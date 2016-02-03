import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, hashHistory, Link } from 'react-router'

import AddTodo from './AddTodo.jsx';
import Bar from './Bar.jsx';
import Foo from './Foo.jsx';
import Footer from './Footer.jsx';
import store from '../store';
import TodoList from './TodoList.jsx';


const TodoApp = ({children}) => (
  <div>
    <nav>Navigation:
      <Link to={`/`}>/</Link>{' '}
      <Link to={`/foo`}>FOO</Link>{' '}
      <Link to={`/bar`}>BAR</Link>
    </nav>
    <main>
      Content for this URL:
      { children || 'Nothing :(' }
    </main>
    <hr />
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
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ TodoApp }>
        <Route path="foo" component={ Foo }/>
        <Route path="bar" component={ Bar }/>
      </Route>
    </Router>
  </Provider>);
}
