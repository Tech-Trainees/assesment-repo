import React,{useState} from "react";
import Copyclip from "./copyClip_RP";

function Comment_RP(props){
    const [comment,setComment ]=useState("");
    const [commentList, setCommentList] = useState([]);
    function handlevalue(e){
        setComment(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        
        setCommentList(commentList.concat(comment))
        setComment("")
         
    }
   
       return(
        <div>
            <input onChange={handlevalue} type="text" placeholder="Type a comment.." value={comment}/>&nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit} >post a comment </button>
            <br/><br/>
            {commentList.map(item=>(
                <div>
                    <p >{item} &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>props.copyToClipboard(item)}>copy</button></p>
                </div>
            ))}
        </div>
       )
}
export default Comment_RP