import React ,{useState} from "react";
import copy from "copy-to-clipboard";

function Comment_HK (props){
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
    
    function updateCommentInput(e) {
      setComment(e.target.value)
      }
    
    function  handleComment(e){  
      e.preventDefault();
      if (comment.length === 0) {
        return;
      }
      setCommentList(commentList.concat(comment))
      setComment("") 
     
    }
     

    
    return(
        <div >
            
            <input type="text" placeholder="Type a comment.." value={comment}
                onChange={updateCommentInput} />&nbsp;&nbsp;&nbsp;
                
            <button onClick={handleComment}>Post a comment</button>
            
            {commentList.map(item=>(
                
                    <div >
                    <p >{item} &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>copy(item)} >copy</button></p>
                   </div>
                )
            )}
        </div>
    )
}

export default Comment_HK;