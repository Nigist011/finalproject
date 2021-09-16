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
  "pk_test_51IPHY7DOWQJlhOeqtfi4d8vEtNt116G7kAmJjhA2SCEWxFJ5O6uyr93az5sYw4fvW75JB2uBUJP2y8d6gT97zN9U008102k7Ra"
);
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/productdetail">
            <Header />
            <ProductDetails />
            <Footer />
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
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <ProductsPage />
            <Footer />
          </Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
