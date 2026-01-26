import "./App.css";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { WebLayout } from "./layouts/WebLayout";
import { ProductProvider } from "./ProductContext";
import { Redirect } from "react-router-dom";
import { LikeProvider } from "./LikeContext";

function AppContent() {
  return (
    <>
      <ToastContainer />
      <Router>
        <WebLayout>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
          </Switch>
        </WebLayout>
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
