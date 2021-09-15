import "./App.css";
import ProductsPage from "./Component/Product/ProductsPage";
import Header from "./Component/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./Component/Product/ProductDetails";
import Footer from "./Component/Footer/Footer";

import Checkout from "./Component/checkout/Checkout";
import Payment from "./Component/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51ILWaRK6FJ4NvQJQAfitXtvoOesU79Mex29dVJK0y2CXbqoOdmeceakJ0NaCWwvKbUuKTtaSsOj4U2KQeBtfoNZA005UNamqdp"
);
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/productdetail">
            <Header />
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <Header />
            <Checkout />
          </Route>
          <Route path="/checkout">
            <Elements stripe={promise}>
              <Header />
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <ProductsPage />
          </Route>
        </Switch>
        <Footer />
      </div>
      {/* <Footer /> */}
    </Router>
    
  );
}

export default App;
