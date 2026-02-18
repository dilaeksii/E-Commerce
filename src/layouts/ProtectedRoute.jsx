import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { useMemo } from "react";

export default function ProtectedRoute({ children, ...rest }) {
  const tokenFromRedux = useSelector((s) => s.auth.token);
  const tokenFromStorage = useMemo(() => localStorage.getItem("token"), []);

  const token = tokenFromRedux || tokenFromStorage;

  return (
    <Route
      {...rest}
      render={() => (token ? children : <Redirect to="/login" />)}
    />
  );
}