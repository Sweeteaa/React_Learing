import {applyMiddleware, createStore} from 'redux'
import counteReducer from './count_reducer'


import thunk from 'redux-thunk'

export default createStore(counteReducer,applyMiddleware(thunk))

