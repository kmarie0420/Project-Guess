import React from "react";
import { useQuery } from "@apollo/client";
import { Card, List, message } from "antd";
import { useNavigate } from "react-router-dom";

import { GET_ONE_CAPSULE } from "../../utils/queries";

const DisplayCapsule = ({ onCapsuleClick, username }) => {
    const { data, loading, error } = useQuery(GET_ONE_CAPSULE);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { title } = data.capsule;

    return (
        <Card title={`${title}`} style={{ maxWidth: '800px', margin: '40px auto' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Display Capsule</h2>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Capsule Title</h5>
                                <p className="card-text">Letter</p>
                                {/* image */}
                                <img src="..." className="card-img-top" alt="..."></img>
                                {/* image */}
                                <img src="..." className="card-img-top" alt="..."></img>
                                {/* image */}
                                <img src="..." className="card-img-top" alt="..."></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

//defaut props  

DisplayCapsule.defaultProps = {
    title: "Capsule Title",
    letter: "Letter",
    image: "Image",
};



export default DisplayCapsule;
