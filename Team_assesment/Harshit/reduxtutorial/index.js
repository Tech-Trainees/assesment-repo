const redux =require('redux')
const createStore =redux.createStore

const BUY_CAKE="BUY_CAKE"
function buyCake(){

    return{
        type: BUY_CAKE ,
        info:'First Redux'
    }

}
const initialState={
 numberofCakes:10
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{...state, numberofCakes:state.numberofCakes-1  } 
        //case NEW_CAKE: return
        default:return state
    }
}

const store=createStore(reducer)
console.log('Intial state',store.getState())
const unsubscribe=store.subscribe(()=>console.log('Updated state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
