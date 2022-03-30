import React from "react";
import {
  Container,
  Button,
  Card,
  CardContent,
  CardActions,
  ListItemText,
  ListItemButton,
  List,
  ListItem,
  Typography,
  Grid,
  CardMedia,
  CardHeader,
} from "@mui/material";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container>
      <Typography variant="h3" color="secondary">
        Your Cart
      </Typography>
      <List>
        {cartItem.map((item) => (
          <ListItem key={item.id}>
            <Grid container>
              <Grid item>
                <Card>
                  <CardMedia
                    component="img"
                    image={item.tinyImage}
                    alt="product image"
                    height="100"
                  />
                  <CardContent>
                    <Typography variant="h6">{item.productName}</Typography>
                    <Typography variant="body1" component="span">
                      price: Rs {item.productPrice}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => removeItem(item)}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
      {/*  if everything is empty */}
      {cartItem.length >= 1 ? (
        <Card sx={{ alignItems: "center", mt: 3 }}>
          <Typography variant="h5">Grand Total</Typography>
          <CardContent>
            <Typography>
              Your amount for {cartItem.length} product is {amount}
            </Typography>
            <CardActions>
              <Button variant="contained" color="success" onClick={buyNow}>
                Buy Now
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6" color="error">
          Cart is Empty
        </Typography>
      )}
    </Container>
  );
};

export default Cart;
