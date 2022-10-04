import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initState={
    user:{}
}

const rootReducer=(state=initState,action)=>{
    switch(action.type){
        case "ADD_USER": 
            return{
            ...state,
            user: action.payload
        }
        default:
            return state;

    }   
}

export default createStore(rootReducer,applyMiddleware(thunk))