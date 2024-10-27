import localStorageKey from "../const/localStorage";
import { useNavigate } from "react-router-dom";
import RouterUrl from "../const/Router";
import { useEffect } from "react";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem(localStorageKey.accessToken);
    if (accessToken) {
      navigate(RouterUrl.HOME);
    }
  }, [navigate]);

  return children;
};

export default PublicRoute;
