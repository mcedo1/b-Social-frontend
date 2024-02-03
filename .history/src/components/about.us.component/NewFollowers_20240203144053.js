import React from "react";


const NewFollowerCard = ({ firstName, lastName }) => {
    return (
      <div className="card">
        <div className="card-body">
          {firstName} {lastName}
        </div>
      </div>
    );
  };
const NewFollowerComponent = () => {
    return (
      <div className="column" style={{ overflowX: 'auto', maxWidth: '80vw' }}>
        <FollowerCard firstName="Jane" lastName="Smith" />
      </div>
    );
  };

function NewFollowers() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                   <NewFollowerComponent/>
                   <NewFollowerComponent/>
                </div>
            </div>
        </div>
    );
}

export default NewFollowers;