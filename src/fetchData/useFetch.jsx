import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Fetch to fail the data resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setisLoading(false);
            seterror(err.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
