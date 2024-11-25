import "./App.css";
import Header from "../src/components/header/index.jsx";
import Hero from "./components/herosection/hero/index.jsx";
import Product from "./components/product-Description/product/index..jsx";
import Reviews from "./components/reviews/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Product />
      <Reviews />
    </>
  );
}

export default App;
