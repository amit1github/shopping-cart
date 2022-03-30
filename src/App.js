import React, { useEffect, useState } from "react";
import Cart from "./Component/Cart";
import BuyPage from "./Component/BuyPage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast("already add in cart", {
        type: "error",
      });
      return
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);

    toast("purchase complete", {
      type: "success",
    });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container>
      <ToastContainer />
      <Grid container >
        <Grid item xs={8}>
          <BuyPage addInCart={addInCart} />
        </Grid>
        <Grid item xs={4}>
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
