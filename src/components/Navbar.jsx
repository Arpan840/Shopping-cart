import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
        color: "white",
        padding: "10px",
      }}
    >
      <h4>Shopping Cart</h4>
      <div style={{ display: "flex", gap: "25px" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          <h4>Home Page</h4>
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/cart">
          <h4>Cart Page</h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
