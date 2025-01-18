import React, {useState} from "react";

function useFetch() {
   const [data, setData] = useState([]);
   const [loding, setLoding] = useState(false);
   const [error, setError] = useState("");

   const fetchData = async (url) => {
      try {
         setLoding(true);
         let res = await fetch(url, {
            "Content-Type": "application/json",
            method: "GET",
         });
         if (res.ok) {
            let jsonData = await res.json();
            setData(jsonData.results || jsonData);
         }
      } catch {
         setError(true);
      } finally {
         setLoding(false);
      }
   };
   return {data, fetchData, loding};
}

export default useFetch;
