import React, { useState } from "react";
import "../submain.component/Submain.css";
import Post from "./Post";
import FollowerComponent from "./FollowerComponet";
import Spinner from 'react-bootstrap/Spinner';

function Submain() {
  
  const [post, setPost] = useState({
    postId: '1',
    content: "Restauracija starih spomenika",
    userId: 7,
    timestamp: "2024-01-29T17:20:55.000Z",
    username: 'stefo'
  })
  const [posts, setPosts] = useState([post, post, post])
  const [spinnerPost, setSpinnerPost] = useState(true)
  const [spinnerFollows, setSpinnerFollows] = useState(true)
  

  return (
    <div className="Submain">
      <div className="Posts">

        idemo
        {posts.map((p, index)=> <Post {...p}/>)}
      </div>
      <div className="Followers">
        <p style={{fontFamily:'cursive', fontSize:'40px', flex:'1px', display:'flex', justifyContent:'center'}}>Our community</p>
        <FollowerComponent/>
      </div>
    </div>
  );
}

export default Submain;
