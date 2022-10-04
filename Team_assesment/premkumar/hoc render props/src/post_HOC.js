import React,{useState} from "react";
import Comment_HOC from "./comment_HOC";
import wrappedComponent from "./withCopy";

function Post_HOC (props){
    const [post, setPost] = useState("");
    const [list, setlist] = useState([]);
    
    function handlePost(val){  
        val.preventDefault();
        if (post.length <= 0) {
            return;
          }
          setlist(list.concat(post));
          setPost("");
        }

    function updateInput(e){
            setPost(e.target.value);
        }
      
    return(
        <div >
            <h1>Post</h1>
            <textarea  rows={8} cols={50} placeholder="Type something on ur mind..." value={post}
                onChange={updateInput}>
                </textarea>
            <button onClick={handlePost}>Post</button>
            
            {list.map(item=>{
                return(
                    <div className="post" >
                        <h2>{item}</h2>
                        <button className="cpybtn" onClick={()=>props.copyToClipboard(item)}>copy</button>
                        <Comment_HOC />
                    </div>
                )
            })}
        </div>
    )
    }

    export default wrappedComponent(Post_HOC);