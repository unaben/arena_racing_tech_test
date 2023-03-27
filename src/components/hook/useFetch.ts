import { useEffect, useState } from "react";
import { IRacingData } from "../model/localization";
// import axios from "axios";

const useFetch = (enteredMonthNumber: string) => {
  const [eventData, setEventData] = useState<IRacingData[]>([]); 

  const fetchData = async () => {
    const baseUrl = `https://api.arenaracingcompany.co.uk/event/month/1318/${enteredMonthNumber ? parseInt(enteredMonthNumber) : 1}`;    
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUkMiLCJhdWQiOiIzIiwiZXhwIjoxNjc5OTA3NTM3fQ.mP81lyjEzOPcxlKuYubwVVea0cYPRlSu58k0POdL6IY";
    // const URL = "http://localhost:3040/eventData";

    try {
      const res = await fetch(baseUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }
      const resData = await res.json();      
      setEventData(resData);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, [enteredMonthNumber]);

  return { eventData };
};

export default useFetch;
