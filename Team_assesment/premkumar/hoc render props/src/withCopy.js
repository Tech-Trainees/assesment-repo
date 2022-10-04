import React from "react";
import copy from "copy-to-clipboard"; 

  const wrappedComponent = (MainComponent)=>{
    class Copy extends React.Component{
        constructor(props){
            super(props);
            this.state={}
        }
        copyToClipboard=(e)=>{
            copy(e);
            alert(`Copied  Successfully( ${e} ).`);
        }
        render(){
            return ( 
                <MainComponent copyToClipboard={this.copyToClipboard} />
            )
        }
    }
    return Copy;

}
export default wrappedComponent