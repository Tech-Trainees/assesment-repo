import React from 'react'
import BarChart from './Barchart'
import Context from './Context'
import { FetchHome } from './FetchHome'
import { Ref } from './Ref'

 
const App = () => {
  return (
    <div>
        {/* <FetchHome /> */}
        {/* <Context />
        <Ref /> */}
       <BarChart />
    </div>
  )
}

export default App

// import React,{useEffect} from 'react';
// import {connect} from 'react-redux';
// import {getRandomUserAction} from './actions';

// import './App.css';

// function App({getUser,user}) {
//   useEffect(()=>{
//     console.log(user)
//   },[user])
//   return (
//     <div className="App">
//       <button onClick={getUser}>Get a random user</button>
//       {
//         Object.values(user).length>0 ? user : <>No random user!</>
//       }
//     </div>
//   );
// }

// const mapStateToProps=(state)=>({user:state.user})

// const mapDispatchToProps={
//   getUser:getRandomUserAction
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App);
