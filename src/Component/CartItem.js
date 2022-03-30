import React from "react";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
} from "@mui/material";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={product.smallImage}
        height="250"
        width="100%"
      />
      <CardContent>
        <Typography component="div" variant="h5" gutterBottom>
          {product.productName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Price: Rs {product.productPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addInCart(product)}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
