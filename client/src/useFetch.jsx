import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { signal: abortCont.signal });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    return () => {
      abortCont.abort();
    };
  }, [url]);
  return { data, isLoading };
};

export default useFetch;
