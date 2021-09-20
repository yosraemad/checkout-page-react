import Header from "./components/Header/Header";

import "./App.module.css";
import { Route, Switch } from "react-router";
import ShoppingCartPage from "./pages/ShoppingCart";
import CheckoutPage from "./pages/Checkout";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <ShoppingCartPage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
