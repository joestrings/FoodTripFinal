import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  console.log(props);
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + taxPrice + shippingPrice;
  const [allItems, setAllItems] = useState([]);
  const addItems = () => {
    setAllItems(allItems => [
      ...allItems,
      {
        itemprice: itemPrice,
        tot: totalPrice,
        tax: taxPrice,
      },
    ]);
  };
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onAdd(item)} className="add">
                {" "}
                +{" "}
              </button>
              <button onClick={() => onRemove(item)} className="remove">
                {" "}
                -{" "}
              </button>
            </div>
            <div className="col-2 text-right">
              {item.qty}X RS.{item.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items price</div>
            <div className="col-1 text-right">RS.{itemPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax price</div>
            <div className="col-1 text-right">RS.{taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping price</div>
            <div className="col-1 text-right">
              RS.{shippingPrice.toFixed(2)}
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total</strong>
            </div>
            <div className="col-1 text-right">
              <strong>RS.{totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <Link to="/Card">
            <button onClick={() => addItems()}>Place order</button>
            </Link>
          </div>

        
          
        </>
      )}
    </aside>
  );
}
