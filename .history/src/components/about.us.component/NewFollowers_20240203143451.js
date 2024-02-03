import React from "react";
import FollowerComponent,{FollowerCard} from "../submain.component/followers.component/FollowerComponet";



const NewFollowerComponent = () => {
    return (
      <div className="column" style={{ overflowX: 'auto', maxWidth: '80vw' }}>
        {/* Set a max-width and overflow-x: auto to make it scrollable horizontally if needed */}
        <FollowerCard firstName="John" lastName="Doe" />
        {/* ... rest of the FollowerCard components */}
        <FollowerCard firstName="Jane" lastName="Smith" />
      </div>
    );
  };

function NewFollowers() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                   <FollowerComponent/>
                   
                </div>
            </div>
        </div>
    );
}

export default NewFollowers;
