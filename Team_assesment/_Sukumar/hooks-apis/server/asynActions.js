// import redux,{createStore,applyMiddleware} from 'redux';
// import thunk from 'redux-thunk'
// import axios from 'axios'
const redux = require('redux')
const createStore = redux.createStore()
const applyMiddleware = redux.applyMiddleware
const thunk = require('redux-thunk')
const axios = require('axios')

const initialState = {
    loading:false,
    users: [],
    error: '',
}
const FETCH_USERS_REQ = 'FETCH_USERS_REQ';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUserReq = () => {
    return {
        type: FETCH_USERS_REQ
    }
}
const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload:users
    }
}
const fetchUsersFailure = (err) => {
    return{
        type:FETCH_USERS_FAILURE,
        payload:err
    }
}
const reducer = (state=initialState,action) => {
    switch (action.type) {
        case FETCH_USERS_REQ:
            return {
                ...state,
                loading:true,
            }
            
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error: '',
            }
            case FETCH_USERS_FAILURE: 
            return {
                loading:false,
                error:action.payload,
                users: [],
            }
    
        default:
            break;
    }
}
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserReq())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
         const users = res.data
         dispatch(fetchUserSuccess(users))
        })
        .catch(err => {
            dispatch(fetchUsersFailure(err.message))
        })
    }
}
const store = createStore(reducer,applyMiddleware(thunk))
store.subscribe(()=> {
    console.log(store.getState());
})
store.dispatch(fetchUsers())