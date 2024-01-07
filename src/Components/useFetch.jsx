import { useEffect,useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, seterror] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
          fetch(url)
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
              setisLoading(false);
              seterror(err.message);
            });
        }, 10);
      }, [url]);
      return {data,isLoading,error}
}

export default useFetch;