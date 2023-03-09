import React from "react";
import "./Checkout.css";
import data from "../data/data";

const Checkout = ({items, setItems}) => {
    return(
        <div className="title">
            <h1>Checkout</h1>
            {items && items.map((item,index) => {
                return(
                    <div key={index}>
                        {/* {name: item.name, price: item.price, count: 1} */}
                        <img className='food-image-checkout' src={data[item.id - 1].img} alt={item.name} />
                        <h3>{item.name} x {item.count} = $ {item.price * item.count}</h3>
                    </div>
                )
            })}
        </div>
    );
};

export default Checkout;