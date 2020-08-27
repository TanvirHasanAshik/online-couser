import React from 'react';
import './OnlineCourse.css';
import Cart from '../Cart/Cart';
import Subject from '../Subject/Subject';
import fakeData from '../../fakeData/course';
import { useState } from 'react';

const OnlineCourse = () => {
    const data = fakeData;
    // console.log(data);
    const [course, setCourse] = useState(data);
    const [total, setTotal] = useState([]);

    function handler(course){
        const newTotal = [...total, course];
        setTotal(newTotal);
    }
    console.log(total);
    return (
        <div className="mainContent">
            <div className="courseContent">
                {
                    course.map(course => <Subject handler={handler} course={course}></Subject>)
                }
            </div>
            <div className="cartContent">
               <Cart total={total}></Cart>
            </div>
        </div>
    );
};

export default OnlineCourse;