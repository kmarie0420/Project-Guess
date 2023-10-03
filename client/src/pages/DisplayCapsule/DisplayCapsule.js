//connect to mongo and retrieve capsule details to display for the user

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_CAPSULES } from '../../utils/queries';


const getOneCapsule = (capsuleId) => {
    const { data, loading, error } = useQuery(GET_ALL_CAPSULES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const capsules = data.getAllCapsules || [];
    const capsule = capsules.find((capsule) => capsule._id === capsuleId);
    return capsule;
}

const DisplayCapsule = () => {
    const location = useLocation();
    const capsuleId = location.state.capsule._id;
    const capsule = getOneCapsule(capsuleId);
    return (
        <div>
            <h1>{capsule.title}</h1>
            <p>{capsule.contents}</p>
        </div>
    )
}


export default DisplayCapsule;

