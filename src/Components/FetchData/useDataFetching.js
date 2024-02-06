import { useState, useEffect } from "react";

function useDataFetching(url) {
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }

      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  return { isloading, isError, data };
}

export default useDataFetching;
