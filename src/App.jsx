import "./App.css";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { WebLayout } from "./layouts/WebLayout";
import { ProductProvider } from "./ProductContext";
import { Redirect } from "react-router-dom";
import { LikeProvider } from "./LikeContext";
import { ProductDetail } from "./pages/ProductDetail";
import { Contact } from "./pages/Contact";


function AppContent() {
  return (
    <>
  <ToastContainer />
  <Router>
    <Switch>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route>
        <WebLayout>
          <Switch>
            <Route path="/product/:imageId">
              <ProductDetail />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Redirect exact from="/" to="/home" />
          </Switch>
        </WebLayout>
      </Route>
    </Switch>
  </Router>
</>

  );
}

export default function App() {
  return (
    <LikeProvider>
      <ProductProvider>
        <AppContent />
      </ProductProvider>
    </LikeProvider>
  );
}
