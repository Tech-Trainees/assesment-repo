import {getRandomUser} from './service';

const ADD_USER="ADD_USER";

export const getRandomUserAction=()=>async(dispatch,getState)=>{
    const newUser= await getRandomUser()
    dispatch({
        type:ADD_USER,
        payload:newUser,
    })
}