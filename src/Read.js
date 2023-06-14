import { useEffect, useState } from "react";
import './Read.css';
import {DispTable} from "./DispTable";
import axios from "axios";
import './UpdateAPI.css'
const Read = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://localhost:7179/api/Books")
      .then((value) => {
        setBooks(value.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  
  return (
    <>
      {error != "" ? <h4>Error with getting the data</h4> : <DispTable table = {books}/>}
    </>
  );
};

export { Read };
