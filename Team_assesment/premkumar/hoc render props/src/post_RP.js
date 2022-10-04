import React,{useState} from "react";
import Copyclip from "./copyClip_RP";
import Comment_RP from "./comment_RP";

function Post_RP (props){
    const [post, setPost] = useState("");
    const [postList, setpostList] = useState([]);

function handlePost(e) {
    e.preventDefault();
    if (post.length <= 0) {
      return;
    }
    setpostList(postList.concat(post));
    setPost("");
  }

  function updateInput(e){
    setPost(e.target.value)
  }

  return(
    <div >
    <h1>Post your Thoughts...</h1>
    <textarea rows={8} cols={50} placeholder="Type something on ur mind..." value={post}
        onChange={updateInput}>
        </textarea>
    <button onClick={handlePost}>Post</button>
    <br/><br/><br/>
    {postList.map(item=>(
        <div className="post">
         <h2>{item}</h2>
       <button className='cpybtn' type="button" onClick={()=>props.copyToClipboard(item)}>copy post</button>
       <Copyclip render={copyToClipboard => <Comment_RP copyToClipboard={copyToClipboard} />} />
       </div>
       ))}
  </div>
  )
}
export default Post_RP