import React from "react";
// import CartButtonn from "./CartButtonn.css";

// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
  const [count, setCount] = React.useState(1)

  const handleChange = (value) => {
    setCount(count+value)
  }
  return <>
  {/* add to cart button */}
 
  {/* count with - and  + button */}
  <div style={{display: 'flex'}}>
      <button onClick={ ()=>handleChange(-1) }>-</button>
      <p className="count-item">{count}</p>
      <button onClick={ ()=>handleChange(1) }>+</button>
  </div>
  </>;
};
export default CartButton