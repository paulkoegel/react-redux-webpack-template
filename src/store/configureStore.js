import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const reduxRouterMiddleware = syncHistory(browserHistory);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const finalCreateStore = compose(
    applyMiddleware(reduxRouterMiddleware),

    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  // Replaying Actions for Devtools
  reduxRouterMiddleware.listenForReplays(store);

  return store;
}
