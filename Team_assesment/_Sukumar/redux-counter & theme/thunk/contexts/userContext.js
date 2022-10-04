import React, { createContext, useState } from "react";

const userContext = createContext();

const UserProvider = ({children}) => {
    const [name,setName] = useState("john doe");
    const [age,setAge] = useState(18);
    const happyBD = () => { setAge(age+1) }
    return(
        <userContext.Provider value={{name,age,happyBD}}>
            {children}
        </userContext.Provider>
    )

}
const withUser = (Child) => (props) => (
    <userContext.Consumer>
        {(context) => <Child {...props} {...context} />}
    </userContext.Consumer>
)

export { UserProvider, withUser };