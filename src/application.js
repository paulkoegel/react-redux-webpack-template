'use strict';
import AppRoot from './components/AppRoot';
import React from 'react';
import { render } from 'react-dom';
import _Foundation from './foundation_init';
require('./global.scss');

jQuery(document).ready(() => {
  jQuery(document).foundation();
});

render(<AppRoot />, document.getElementById('react-container'));
