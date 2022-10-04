import React, { useState } from "react";
import Comment_HK from "./comment_HK";
import copy from "copy-to-clipboard";
function App_HK() {
   
    const [newPost, setnewPost]=useState("");
    const [list, setlist]=useState([]);
    
    function updateInput(val) {
      setnewPost(val.target.value)
      }
    function handlePost(e){  
      e.preventDefault();
      if (newPost.length === 0) {
        return;
      }
      setlist(list.concat(newPost))
      setnewPost("")
    }
    return(
        <div >
            <h1>Post your Thoughts...</h1>
            <textarea rows={8} cols={50} placeholder="Type something on ur mind..." value={newPost}
                onChange={updateInput}>
                </textarea>
            <button onClick={handlePost} >Post</button>
            <br/><br/>
            
            {list.map(item=>{
                return(
                  <div>
                    <div className="post"><h2>{item}</h2>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="cpybtn" onClick={()=>copy(item)} >copy</button><br/>
                    <hr/>
                    <Comment_HK /></div>
                    </div>
                )
            })}
        </div>
    )
    }

export default App_HK;