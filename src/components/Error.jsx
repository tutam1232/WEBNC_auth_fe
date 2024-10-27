import RouterUrl from "../const/Router";
import { Link } from "react-router-dom";

// Error component will be displayed by ErrorBoundary when an error is caught

function Error() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Fetching Error: caught by ErrorBoundary</h1>
      <Link to={RouterUrl.HOME}>Click here to go to home page</Link>
    </div>
  );
}

export default Error;
