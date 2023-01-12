import React, { useState } from "react";

const CartItem = (props) => {
  const { cart, updateCart } = props;

  const host = "http://localhost:5000";
  const cartsInitial = [];
  const [carts, setCarts] = useState(cartsInitial);
 
  // //Delete Cart Method
  const deleteCart = async (id) => {
    const response = await fetch(`${host}/api/carts/deletecart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = response.json();
    console.log(json);

    console.log("Deleting cart with id" + id);
    const newCarts = carts.filter((cart) => {
      return cart._id !== id;
    });
    setCarts(newCarts);
  };

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{cart.title}</h5>
            <i
              className="fa fa-trash mx-2"
              aria-hidden="true"
              onClick={() => {
                deleteCart(cart._id);
                alert("Deleted Successfully", "success");
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={() => {
                updateCart(cart);
              }}
            ></i>
          </div>
          <p className="card-text">{cart.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
