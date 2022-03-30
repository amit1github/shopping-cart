import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Typography, Box, Grid } from "@mui/material";
import { faker } from "@faker-js/faker";

import CartItem from "./CartItem";


const apiKey = "REACT_APP_IMG_PUBLIC_KEY"

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&&page=1";
const localUrl = "https://myjson.dit.upm.es/api/bins/bz4v";


const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  //   const fetchPhotos = async () => {
  //     const {data} = await Axios.length(url, {
  //       header: {
  //         Authorization: apiKey,
  //       },
  //     });

  //     const { photos } = data;

  //     const allProduct = photos.map((photo) => ({
  //       smallImage: photo.src.medium,
  //       tinyImage: photo.src.tiny,
  //       productName: randomWord,
  //       productPrice: randomPrice,
  //       id: randomUuid,
  //     }));

  //     setProduct(allProduct);

  //   };

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localUrl, {});

    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: faker.random.word(),
      productPrice: faker.commerce.price(),
      id: faker.datatype.uuid(),
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <Typography
        variant="h3"
        color="Highlight"
        textAlign="center"
        gutterBottom
      >
        Buy Page
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {product.map((product) => (
          <Grid item spacing={2} sm={6} md={6} lg={4} xl={3} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BuyPage;
