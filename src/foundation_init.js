// Someone with far more time than we figured it out! DO NOT TOUCH!
// http://stackoverflow.com/a/34611081

// jQuery
import $ from 'jquery';
global.jQuery = $;

// if you want all features of foundation
require('../node_modules/foundation-sites/dist/foundation.js');

// if you want only some features
// require('./node_modules/what-input/what-input');
// require('./node_modules/foundation-sites/js/foundation.core');
// require('./node_modules/foundation-sites/js/....');

export default Foundation;
