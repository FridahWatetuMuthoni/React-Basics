import { useState, useEffect } from "react";

function useFetchData(url) {
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await response.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }

      setIsLoading(false);
    };
    fetchUser();
  }, [url]);
  return { isloading, isError, user };
}

export default useFetchData;
