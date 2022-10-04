import React,{createContext, useContext,useState} from 'react'

const userConetxt = createContext();

 export default function Context(){
    const [name, setName] = useState('john doe');
    
    return(
       <userConetxt.Provider value={name}>
      
            <h1>im comp1</h1>
            <h3>{`im user ${name}`}</h3>
            <Comp2 />
       </userConetxt.Provider>
    )
}
function Comp2(){
    return(
        <div>
            <h1>im comp2</h1>
          <Comp3 />
        </div>
    )
}
function Comp3(){
    return(
        <div>
            <h1>im comp3</h1>
          <Comp4 />
        </div>
    )
}
 const Comp4 = () => {
    const username = useContext(userConetxt)
  return (
    <div>
       <h1>im comp4</h1>
       <h3>{`hey hi again im ${username}`}</h3>
    </div>
  )
}
