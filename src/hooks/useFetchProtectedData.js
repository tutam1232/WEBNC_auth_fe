import { useEffect, useState } from "react";
import axios from "axios";
import localStorageKey from "../const/localStorage";
// Function: wrapPromise
// Parameters: promise - a promise object
// Returns: throw promise if status is pending, throw result if status is error, return result if status is success -> so that Suspense, ErrorBoundary
// can catch the promise or error or return the result
const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspend = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return () => {
    if (status === "pending") {
      throw suspend;
    } else if (status === "error") {
      if (result?.response?.status === 401) {
        localStorage.removeItem(localStorageKey.accessToken);
      }
      else{
        throw result;
      }
    } else if (status === "success") {
      return result;
    }
  };
};

const useFetchProtectedData = (url, method, senddata = {}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const config = {
        method: method,
        url: url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(localStorageKey.accessToken)}`,
        },
      };

      if (method.toLowerCase() === "get") {
        config.params = senddata;
      } else {
        config.data = senddata;
      }

      const promise = axios(config).then((res) => res?.data);

      setData(wrapPromise(promise));
    };

    getData();
  }, [url, method, JSON.stringify(senddata)]);

  return data;
};

export default useFetchProtectedData;
