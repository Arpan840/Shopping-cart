import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/features/products/products.slice";
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  const data = useSelector((state) => {
    return state.products;
  });
  const { products, isLoding, error } = data;

  function addtoCart(product) {
    console.log(product, "product");
    let existingCart = localStorage.getItem("product");
    existingCart = existingCart ? JSON.parse(existingCart) : [];

    const isProductInCart = existingCart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      existingCart.push(product);
      localStorage.setItem("product", JSON.stringify(existingCart));
      console.log("Product added to cart:", product);
      toast.success("Product added to cart:", product);
    } else {
      console.log("Product is already in the cart");
      toast.error("Product is already in the cart")
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "cente",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <div style={{ width: "100vw", textAlign: "center" }}>
        <h1>All Items</h1>
      </div>
      <div
        style={{
          width: "80vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2%",
          margin: "auto",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: "20%",
              border: "1px solid #000",
              maxHeight: "500px",
              marginBottom: "2%",
            }}
          >
            <img
              style={{ width: "100%", height: "350px" }}
              src={product.thumbnail}
              alt="Product Image"
            />
            <div style={{ padding: "2%", width: "100%" }}>
              <p>Tite: {product.title}</p>
              <p>Price: {product.price}</p>
            </div>

            <button
              style={{
                backgroundColor: "black",
                color: "white",
                width: "100%",
                padding: "10px",
              }}
              onClick={() => addtoCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
