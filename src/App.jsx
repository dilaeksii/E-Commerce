import "./App.css";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { WebLayout } from "./layouts/WebLayout";
import { Redirect } from "react-router-dom";
import { ProductDetail } from "./pages/ProductDetail";
import { Contact } from "./pages/Contact";
import { Team } from "./pages/Team";
import { About } from "./pages/About";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { Blog } from "./pages/Blog";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "./features/users/authSlice";
import { fetchCategories } from "./features/products/categoriesSlice";
import { Card } from "./pages/Card";
import ProtectedRoute from "./layouts/ProtectedRoute";
import { Checkout } from "./pages/Checkout";
import { Order } from "./pages/Order";
import { PrevOrders } from "./pages/PrevOrders";

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Router>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <WebLayout>
            <Switch>
              <Route path="/product/:id">
                <ProductDetail />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/cart">
                <Card />
              </Route>
              <Route path="/team">
                <Team />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
              <ProtectedRoute path="/checkout">
                <Checkout />
              </ProtectedRoute>
              <ProtectedRoute path="/prevorders">
                <PrevOrders />
              </ProtectedRoute> 
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/shop/:gender/:categoryName/:categoryId">
                <Shop />
              </Route>
              <Route path="/shop">
                <Shop />
              </Route>
              <Redirect exact from="/" to="/home" />
            </Switch>
          </WebLayout>
        </Switch>
      </Router>
    </>
  );
}

export default function App() {
  return <AppContent />;
}
