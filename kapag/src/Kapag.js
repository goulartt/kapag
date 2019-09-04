import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import reduxThunk from 'redux-thunk';

import Router from './Router';
import rootReducer from './reducers';
import reactotron from './ReactotronConfig'




/*const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(reduxThunk)
));*/

const store = createStore(rootReducer, compose(
  applyMiddleware(reduxThunk),
  reactotron.createEnhancer()
));

const Kapag = prop => (

  <Provider store={store}>
    <Router />
  </Provider>

)

export default Kapag;