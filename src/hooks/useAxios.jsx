import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios({ baseURL, endPoint, dataType }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios({ baseURL, url: endPoint });
        const result = dataType
          ? await response.data[dataType]
          : await response.data;
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [baseURL, endPoint]);
  return { data, loading, error };
}
