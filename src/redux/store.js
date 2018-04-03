import {applyMiddleware, combineReducers, createStore} from 'redux'
import history from './history'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import thunk from 'redux-thunk'
import content from './content/reducer'

const store = createStore(combineReducers({
        content,
        router: routerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, routerMiddleware(history))
)

export default store
