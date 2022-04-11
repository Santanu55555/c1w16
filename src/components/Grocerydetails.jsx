import React from "react";
import data from "../data.json";
// import CartButton from './components/CartButton'
// import CartButton from "./CartButton"

const GroceryDetails = () => {
  console.log(data);

  return (
    <>
      <h1>Groceries</h1>
      <div className="container">
        {/* map through the data and display the cards */}
        {data.map((GroceryDetail) => {
          return (
            <>
              <div className="data">
                <img src={GroceryDetail.imgURL} />

                <p>{GroceryDetail.title}</p>

                <p>{GroceryDetail.sellingPrice}</p>
                <p>M.R.P ₹</p>
                <s>{GroceryDetail.mrp}</s>
                <button >Add to cart</button>
              </div>
              {/* <CartButton/> */}
            </>
          );
        })}
      </div>
    </>
  );
};
export default GroceryDetails;