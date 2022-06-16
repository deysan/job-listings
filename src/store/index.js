const { createStore } = require('redux');
const { rootReducer } = require('./rootReducer');

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
