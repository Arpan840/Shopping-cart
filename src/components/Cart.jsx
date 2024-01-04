import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartProducts, resetAll } from "../redux/features/cart/cart.slice";
import { removeCartItem } from "../redux/features/cart/removeProduct.slice";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchCartProducts()) {
      dispatch(fetchCartProducts());
    } else {
      return "Add Item";
    }
  }, []);
  const cartData = useSelector((state) => {
    return state.cartProducts;
  });
  const { cartProducts, isLoding, error } = cartData;
  if (!cartProducts || cartProducts.length === 0) {
    return <div>Add items to your cart</div>;
  }
  function totalPrice() {
    let sum = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      sum = sum + cartProducts[i].price;
    }
    return sum;
  }

  function removeProduct(cart) {
    console.log(cart);
    dispatch(removeCartItem(cart.id));
    dispatch(fetchCartProducts());
    toast.success(cart.title + " " + "removed from Cart");
  }

  const checkoutProducts = () => {
    localStorage.clear();

    toast.success(" Items have been checkout out");
  };

  return (
    <div>
      <div style={{ width: "100vw", textAlign: "center" }}>
        <h1>My Cart</h1>
      </div>
      <div
        style={{
          display: "flex",

          alignItems: "cente",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "70vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2%",
            margin: "auto",
          }}
        >
          {cartProducts.map((cart) => (
            <div
              key={cart.id}
              style={{
                width: "20%",
                border: "1px solid #000",
                maxHeight: "500px",
                marginBottom: "2%",
              }}
            >
              <img
                style={{ width: "100%", height: "350px" }}
                src={cart.thumbnail}
                alt="Product Image"
              />
              <div style={{ padding: "2%", width: "100%" }}>
                <p>Tite: {cart.title}</p>
                <p>Price: {cart.price}</p>
              </div>

              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "100%",
                  padding: "10px",
                }}
                onClick={() => removeProduct(cart)}
              >
                Remove From Cart
              </button>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "25vw",
            backgroundColor: "black",
            color: "white",
            margin: "20px",
            height: "100%",
          }}
        >
          <div style={{ width: "100%", textAlign: "center", paddingTop: "5%" }}>
            <h3>Checkout List</h3>
          </div>
          <div>
            {cartProducts.map((data) => (
              <div
                key={data.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  margin: "auto",
                }}
              >
                <div style={{ display: "flex" }}>
                  <p>{data.id}.</p>
                  <p> {data.title}</p>
                </div>
                <p>${data.price}</p>
              </div>
            ))}
            <hr style={{ width: "100%", border: "3px solid white" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "80%",
                margin: "auto",
                alignItems: "center",
              }}
            >
              <b>Total Price : </b>
              <p>${totalPrice()}</p>
            </div>
            <hr style={{ width: "100%", border: "3px solid white" }} />
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  whidth: "100%",
                  textAlign: "center",
                  margin: "auto",
                  padding: "20px",
                }}
                onClick={checkoutProducts}
              >
                Click To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
