import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FollowerCard = ({ firstName, lastName }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "350px", height: "200px", margin:'5px' }}>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title d-flex justify-content-center">{`${firstName} ${lastName}`}</h5>
                    <button className="btn btn-danger">Follow</button>
                </div>
            </div>
        </div>
    );
};

const FollowerComponent = () => {
    return (
        <div className="container mt-5">
            <div
                className="column"
                style={{
                    overflowY: "auto",
                    maxHeight: "90vh",
                    overflowX: "hidden",
                }}>
                <FollowerCard firstName="John" lastName="Doe" />
                <FollowerCard firstName="John" lastName="Doe" />
                <FollowerCard firstName="John" lastName="Doe" />
                <FollowerCard firstName="John" lastName="Doe" />
                <FollowerCard firstName="John" lastName="Doe" />
                <FollowerCard firstName="John" lastName="Doe" />
                <FollowerCard firstName="John" lastName="Doe" />
            </div>
        </div>
    );
};
export default FollowerComponent;
