import { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { WebLayout } from "./layouts/WebLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
      <Router>
        <Switch>
          <WebLayout>
            <Route exact path="/">
              <Home />
            </Route>
          </WebLayout>
          <WebLayout>
            <Route path="/shop">
              <Shop />
            </Route>
          </WebLayout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
