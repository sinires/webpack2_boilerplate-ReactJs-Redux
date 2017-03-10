/**
 * Created by ftalaev on 07.03.17.
 */
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import {development} from '../../build'


export default function configureStore(initialState) {
    const logger = createLogger()
        , store = development ? createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
        : createStore(rootReducer, initialState, applyMiddleware(thunk));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}