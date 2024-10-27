import useFetchProtectedData from "../hooks/useFetchProtectedData";
import Urls from "../const/Url";
import localStorageKey from "../const/localStorage";
function Home() {
  const homeData = useFetchProtectedData(Urls.HOME, "get");
  return (
    <div style={{width: "100vw", height: "50vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <h1>Home</h1>
      <h2>{homeData?.data}</h2>
      <button onClick={() => {
        localStorage.removeItem(localStorageKey.accessToken);
        window.location.reload();
      }}>Logout</button>
    </div>
  );
}

export default Home;
