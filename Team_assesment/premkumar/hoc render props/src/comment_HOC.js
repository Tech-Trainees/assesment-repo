import React,{useState} from "react";
import wrappedComponent from "./withCopy.js";

function Comment_HOC (props){
    const [comment,setComment ]=useState("");
    const [commentlist, setCommentlist] = useState([]);


    function handleChange(e){
        setComment(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        
        setCommentlist(commentlist.concat(comment))
        setComment("")
         
    }
    return(
        <div>
            <input onChange={handleChange}  placeholder="Type a Comment.." value={comment}/>&nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit}>Post</button> 
        {commentlist.map(item=>(
            <div>
            <p>{item} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            <button onClick={()=>props.copyToClipboard(item)}>copy</button></p>
            </div>
        ))}
       
         
    </div>
    )
}
export default wrappedComponent(Comment_HOC);