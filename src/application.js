'use strict';
import AppRoot from './components/AppRoot';
import React from 'react';
import { render } from 'react-dom';
import _Foundation from './foundation_init';
// will not use `Foundation` here, `foundation_init` does imperative setup work that is required for Foundation to work (e.g. add `foundation` function on `jQuery`).
require('./global.scss');

jQuery(document).ready(() => {
  jQuery(document).foundation();
});

render(<AppRoot />, document.getElementById('react-container'));
