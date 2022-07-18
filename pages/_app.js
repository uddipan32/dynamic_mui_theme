import App from "next/app";
import absoluteUrl from "next-absolute-url";
import { ThemeProvider } from "@mui/material/styles";
import ProductContext from "../src/productContext";

// ==== IMPORT THEMES ====
import { theme1, theme2, theme3, theme4 } from "../styles/mui/theme";
import "../styles/globals.css";

MyApp.getInitialProps = async (appContext) => {
  const { protocol, host } = absoluteUrl(appContext.ctx.req, "vcap.me:3000");
  const sub_domain = host.split(".", 1);
  const store_name = sub_domain[0];

  const res = await fetch("https://dummyjson.com/products/" + store_name);
  const productDetails = await res.json();
  console.log(productDetails);
  return { props: { productDetails } };
};

function MyApp({ Component, pageProps, props }) {
  // ==== SELECT THEME FROM BACKEND ====
  let selectedTheme = theme1;
  if (props.productDetails) {
    if (props.productDetails.brand === "Apple") {
      selectedTheme = theme1;
    } else if (props.productDetails.brand === "Samsung") {
      selectedTheme = theme2;
    } else if (props.productDetails.brand === "OPPO") {
      selectedTheme = theme3;
    } else if (props.productDetails.brand === "Huawei") {
      selectedTheme = theme4;
    }
  }
  return (
    <ThemeProvider theme={selectedTheme}>
      <ProductContext.Provider value={props.productDetails}>
        <Component {...pageProps} />
      </ProductContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
