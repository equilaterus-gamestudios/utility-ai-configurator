import reduxThunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers';

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
  // TODO: Enable only for dev
  middleware = [...middleware, logger]

  const store = createStore(
    reducers,
    compose(applyMiddleware(...middleware))
  )

  return store;
}

export default configureStore
