import { Navigate } from "react-router-dom";
import RouterUrl from "../const/Router";
import localStorageKey from "../const/localStorage";
import useFetchProtectedData from "../hooks/useFetchProtectedData";
import Urls from "../const/Url";

const PrivateRoute = ({ children }) => {
  useFetchProtectedData(Urls.HOME, "get");

  if (!localStorage.getItem(localStorageKey.accessToken)) {
    return <Navigate to={RouterUrl.LOGIN} />;
  }

  return children;
};

export default PrivateRoute;