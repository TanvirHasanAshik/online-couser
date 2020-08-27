import React from 'react';
import './Subject.css';
const Subject = (props) => {
    // console.log(props.course)
    const {name, price, catagories, image} = props.course
    return (
        <div>
            <h1>CourseName: {name}</h1>
            <h2>Details: {catagories}</h2>
            <h3>Course price: {price} Tk</h3>
            <button onClick={() => props.handler(props.course)}>Enroll Now</button>
        </div>
    );
};

export default Subject;