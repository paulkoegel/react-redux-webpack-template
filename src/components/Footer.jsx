import React from 'react';
import { connect } from 'react-redux';
import DevTools from '../containers/DevTools'; // TODO: Handle for Prod
import { Link } from 'react-router';
import { setVisibilityFilter } from '../actions';

const Link2 = ({ active, children, onClick }) => {
  if (active) {
    return <span>{ children }</span>;
  }

  return (
    <a href='#'
       onClick={ e => {
         e.preventDefault();
         onClick();
       } }
      >
      { children }
    </a>
  );
};

const mapStateProps = (state, ownProps) => {
  return {
    active:
      ownProps.filter ===
      state.visibilityFilter
  };
};

const mapDispatchProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      );
    }
  };
};

const FilterLink = connect(mapStateProps, mapDispatchProps)(Link2);

export default () => (
  <div>
    Show:
    { ' ' }
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    { ', ' }
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    { ', ' }
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
    <DevTools />
    <br />
    <Link to={ '/about' }>About</Link>
  </div>
);
