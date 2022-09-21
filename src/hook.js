import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetData() {
  const url = "https://tedooo-job-application.herokuapp.com/fetch/";
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    return () => fetchData();
  }, []);

  return data;
}
