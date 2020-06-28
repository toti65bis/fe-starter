import Immutable from 'immutable';
import reduxThunk  from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';

function createMiddlewares ({ isServer }) {
  const middlewares = [
    reduxThunk
  ]

  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    middlewares.push(createLogger({
      level: 'info',
      collapsed: true,
      stateTransformer: (state) => {
        const newState = {}

        for (const i of Object.keys(state)) {
          if (Immutable.Iterable.isIterable(state[i])) {
            newState[i] = state[i].toJS()
          } else {
            newState[i] = state[i]
          }
        }

        return newState
      }
    }))
  }

  return middlewares
}

function immutableChildren (obj) {
  const state = {}
  Object.keys(obj).forEach((key) => {
    state[key] = Immutable.fromJS(obj[key])
  })
  return state
}

export default (initialState = {}, context) => {
  const { isServer } = context
  const middlewares = createMiddlewares({ isServer })
  const state = immutableChildren(initialState)
  const composeEnhancers = compose(
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : f => f
  );

  return createStore(
    rootReducer,
    state,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}
