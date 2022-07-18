import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ProductContext from "../src/productContext";

import { useContext } from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";

export default function Home() {
  const product = useContext(ProductContext);
  console.log(product);
  return (
    <div className={styles.container}>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <main className={styles.main}>
        <Typography variant="h2" color="primary">
          Welcome to {product.brand}
        </Typography>

        <Typography variant="h4" color="secondary">
          {product.title}
        </Typography>
        <Typography variant="body1" color="secondary">
          {product.description}
        </Typography>
        <img src={product.images[0]} />
      </main>
    </div>
  );
}
