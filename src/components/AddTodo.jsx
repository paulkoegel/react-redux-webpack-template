import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class AddTodo extends React.Component {
  render() {
    let input;

    return (
      <div>
        <input ref={node => {input = node}} />
        <button onClick={() => {
          this.props.dispatch(addTodo(input.value));
          input.value = '';
        }}>
          Add Todo
        </button>
      </div>
    );
  }
}
export default connect()(AddTodo);
