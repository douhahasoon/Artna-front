import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        // setErrorMsg(err.message);
      });
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
