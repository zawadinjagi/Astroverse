import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      setError(null);
      const secret = process.env.REACT_APP_API_KEY;
      const currentDate = new Date();
      const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      const startDateString = monthStart.toISOString().split('T')[0];
      const endDateString = monthEnd.toISOString().split('T')[0];
      const url = `https://api.nasa.gov/planetary/apod?api_key=${secret}&start_date=${startDateString}&end_date=${endDateString}`;
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, loading, error];
};