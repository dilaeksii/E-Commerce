import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({children, ...rest}) {
  const isAuth = useSelector((state) => state.auth.token);

  return (
    <Route
      {...rest}
      render={() => (isAuth ? children : <Redirect to="/login" />)}
    />
  );
}
