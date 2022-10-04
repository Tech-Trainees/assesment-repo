import  React,{ Component } from "react";
import copy from "copy-to-clipboard"; 

 class Copyclip extends Component {
     constructor(props){
         super(props);
     }

  copyToClipboard=(value)=>{
        copy(value);
        alert(`You have copied ${value}`);
    }

  render() {
      return (this.props.render(this.copyToClipboard));
    }
    
  }
  export default Copyclip