import { Spin } from "antd";

// Loading component will be displayed by Suspense when a promise is caught


function Loading() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Spin />
    </div>
  );
}

export default Loading;
