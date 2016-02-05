// this file does some imperative loading and changing to set up Foundation.
// although it ends with `export default Foundation`, it will not serve Foundation to other modules - but has to run before other modules can import foundation from node_modules
// in other JS files where you need Foundation, simply load it via `import Foundation from 'foundation';`

// Someone with far more time than us figured out how to properly load Foundation from its npm module
// http://stackoverflow.com/a/34611081
// DO NOT TOUCH THIS FILE!

// jQuery
import $ from 'jquery';
global.jQuery = $; // make jQuery available before loading foundation

// if you want to load all JS features of Foundation
// for some reason this doesn't work with `import`
// this modifies `jQuery` by adding the `$.foundation` function to it - therefore `jQuery` needs to be made globally available beforehand
// this loads `Foundation` into the current scope
require('../node_modules/foundation-sites/dist/foundation.js');

// if you want only specific JS features of Foundation
// require('./node_modules/what-input/what-input');
// require('./node_modules/foundation-sites/js/foundation.core');
// require('./node_modules/foundation-sites/js/....');

export default Foundation;
