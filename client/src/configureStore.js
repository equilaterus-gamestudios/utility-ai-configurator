import reduxThunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers';

const configureStore = () => {
    let composeEnhancers = compose;
    if (process.env.NODE_ENV !== 'production') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }
    
    const store = createStore(
      reducers,
      composeEnhancers(applyMiddleware(reduxThunk))
    )

    return store
}

export default configureStore
