import React from 'react';

const SingleDashboard = (props) => {
    const {name,email,img,person,description,number,price,Days,place,address,nid,question}=props.dash;
    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
        </div>
    );
};

export default SingleDashboard;