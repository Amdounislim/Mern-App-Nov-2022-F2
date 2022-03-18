import { createStore, applyMiddleware, compose } from "redux"
import reducerUser from "../reducers/reducerUser"
import thunk from 'redux-thunk'


// let arr =[midl1, midl2, midl3]


const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducerUser, composeEnhansers(applyMiddleware(thunk)))
// const store = createStore(reducerUser, composeEnhansers(applyMiddleware(...arr)))

export default store