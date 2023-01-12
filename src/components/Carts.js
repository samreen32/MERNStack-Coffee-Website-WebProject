import React, {useEffect, useRef, useState} from 'react';
import {useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const Carts = (props) => {

  const host = "http://localhost:5000";
  const cartsInitial = [];
  const [carts, setCarts] = useState(cartsInitial);
  let redirect = useNavigate();
  const ref = useRef(null);
  const refClose = useRef(null);
  const [cart, setCart] = useState({id:"", etitle: "", edescription: "", etag: ""});

  //fetch carts function
 const getCarts = async ()=>{
   const response = await fetch(`${host}/api/carts/fetchallcarts`, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      "auth-token": localStorage.getItem('token')
    }
  });
  const json = await response.json();
  console.log(json);
  setCarts(json);
}

  useEffect(()=>{
    if(localStorage.getItem('token')){     
      getCarts();
    }
    else{
      redirect("/Login");
    }
    // eslint-disable-next-line
  }, []);



//Edit Cart Method
const editCart = async (id, title, amount, price)=>{
  const response = await fetch(`${host}/api/carts/uppdatecart/${id}`, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
      "auth-token": localStorage.getItem('token')
    },
    body: JSON.stringify({title, amount, price}) 
  });
  const json = await response.json();
  console.log(json);

  let newCarts = JSON.parse(JSON.stringify(carts));
  for (let index = 0; index < newCarts.length; index++) {
    const element = newCarts[index];
    if(element._id === id){
      newCarts[index].title = title;
      newCarts[index].amount = amount;
      newCarts[index].price = price;
      break;
    }
  }
  setCarts(newCarts);
}


//Method 
const updateCart =(currentCart)=>{
  ref.current.click();    
  setCart({id: currentCart._id, etitle: currentCart.title, 
    eamount: currentCart.amount, eprice: currentCart.price});
}

//Method
const handleEditCart =(e)=>{
  console.log("Updating or editing cart", cart);
  editCart(cart.id, cart.etitle, cart.eamount, cart.eprice);  
  refClose.current.click();    
  alert("Updated Successfully", "success");  
}


const onChange =(e)=>{
  setCart({...cart, [e.target.name]: e.target.value});     
}


  return (
    <>
    {/* Modal for updatating note */}
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Cart</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form  className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp"
                  value={cart.etitle} minLength={3} onChange={onChange} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="eamount" className="form-label">Amount</label>
                  <input type="text" className="form-control" id="eamount" name="eamount" 
                  value={cart.eamount} minLength={1} onChange={onChange} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="eprice" className="form-label">Price</label>
                  <input type="text" className="form-control" id="eprice" name="eprice" 
                  value={cart.eprice}
                  minLength={1} onChange={onChange} required/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" 
              ref={refClose}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleEditCart}
               >Update Cart</button>
            </div>
          </div>
        </div>
      </div>


      {/*Viewing Carts */}
      <div className="row my-3">
          <h1>Your Orders</h1>
          <div className="container mx-2"> 
            {carts.length===0 && 'No Order to display'}
          </div>
          {carts.map((cart)=>{
              return <CartItem  key={cart._id} updateCart={updateCart} cart={cart}/> 
          })}
      </div>
    </>
  )
}

export default Carts;