import reduxThunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers';
import isDev from 'electron-is-dev';

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)
    let returnValue = next(action)
    console.log('state after dispatch', getState())
    return returnValue
  }
}

function configureStore() {
  let middleware =  [reduxThunk];
  if (isDev) {
    middleware = [...middleware, logger]
  }

  const store = createStore(
    reducers,
    compose(applyMiddleware(...middleware))
  )

  return store;
}

export default configureStore
