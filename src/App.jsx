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

function AppContent() {
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
              <Route path="/product/:imageId">
                <ProductDetail />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/team">
                <Team />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/about">
                <About />
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
  return (
    
      <AppContent />
    
  );
}
