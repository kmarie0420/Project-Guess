import React from "react";
import { useQuery } from "@apollo/client";
import { Card, List, message } from "antd";
import { useNavigate } from "react-router-dom";

import { GET_ONE_CAPSULE } from "../../utils/queries";

const DisplayCapsule = () => {
 const navigate = useNavigate();

 const { loading, data } = useQuery(GET_ONE_CAPSULE);

 if (loading) {
    return <div>Loading...</div>;
 }

 const capsule = data?.capsule || {};

 const handleEdit = () => {
    navigate(`/edit/${capsule._id}`);
 };

 const handleDelete = () => {
    message.success("Capsule deleted");
    navigate("/");
 };
 const handleOpen = () => {
    navigate(`/open/${capsule._id}`);
 };

 return (
    <div>
      <Card
        title={capsule?.title} // this is now rendering the title from the capsule
        style={{ width: 300, marginTop: 16 }}
        extra={<a href="#">More</a>}
      >
        <List
          size="small"
          header={<div>Letters</div>}
          bordered
          dataSource={capsule?.letters}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <p>{capsule?.image}</p>
      </Card>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleOpen}>Open</button>
    </div>
 );
};

export default DisplayCapsule;
