import React from 'react';

const Cart = (props) => {
    let courseTotal = props.total;
    let totalCost = 0;
    for (let i = 0; i < courseTotal.length; i++) {
        const total = courseTotal[i].price;
        totalCost += total;
        
    }
    
    return (
        <div>
            <h2>Total Course: {courseTotal.length}</h2>
            <h4>Total Cost: {totalCost}</h4>
        </div>
    );
};

export default Cart;