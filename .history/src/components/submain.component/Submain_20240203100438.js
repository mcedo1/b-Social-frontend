import React from "react";
import "../submain.component/Submain.css";
import Post from "./Post";
import FollowerComponent from "./followers.component/FollowerComponet";
function Submain() {
  return (
    <div className="Submain">
      <div className="Posts">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="Followers">
        <p style={{fontFamily:'cursive', fontSize:'40px', flex:'1px', display:'flex', justifyContent:'center'}}>Our community</p>
        <FollowerComponent/>
      </div>
    </div>
  );
}

export default Submain;
