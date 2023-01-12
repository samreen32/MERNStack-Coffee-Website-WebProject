import React, { useState } from "react";

const CartForm = (props) => {

  const host = "http://localhost:5000";
  const cartsInitial = [];
  const [carts, setCarts] = useState(cartsInitial);

  //add cart function
  const addCart = async (title, amount, price) => {
    const response = await fetch(`${host}/api/carts/addcart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, amount, price }),
    });
    const cart = await response.json();
    setCarts(carts.concat(cart)); 
  };


  const [cart, setCart] = useState({ title: "", amount: "", price: "" });

  const handleAddCart = (e) => {
    e.preventDefault();
    addCart(cart.title, cart.amount, cart.price);
    setCart({ title: "", amount: "", price: "" });
    alert("Added Successfully", "success");
  };

  const onChange =(e)=>{
      setCart({...cart, [e.target.name]: e.target.value});      
          
  }

  return (
    <div>
      <div className="container my-5">
        <h1>Order Coffee</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={cart.title} minLength={3} onChange={onChange}
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="amount"
              name="amount"
              value={cart.amount} minLength={1} onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={cart.price} minLength={1} onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" 
          onClick={handleAddCart}
          >
            Order
          </button>
        </form>
      </div>
       
    </div>
  );
};

export default CartForm;
