import { ErrorBoundary } from "react-error-boundary";
import Loading from "./Loading";
import Error from "./Error";
import { Suspense } from "react";

// This is the public container component, it will wrap the children components and show a loading spinner and error using ErrorBoundary and Suspense
// to catch error or promise
// Also display a navigation bar with links to Landing page and Home page

const PublicContainer = ({ children }) => {
  
 

  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <h1 style={{ textAlign: "center" }}>
          Advanced Web Development exercise - authentication
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default PublicContainer;
