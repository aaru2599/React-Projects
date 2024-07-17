import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await axios.get(url);
        setData(responce.data);
        console.log("ApiCall");
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[url]);
  return { data, loading, error };
};
export default useApi;
