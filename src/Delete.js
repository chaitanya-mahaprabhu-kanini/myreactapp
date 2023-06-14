import { React, useState, useEffect } from "react";
import "./Delete.css";
import axios from 'axios';
import { DispTable } from "./DispTable";

export default function Delete() {
  const [error, setError] = useState("");
  const [id, setId] = useState(1);
  const [books, setBooks] = useState([]);
  const [url, setUrl] = useState(``);
  
  const clickHandler = (event) => {
    alert("Deleted!");
    setUrl(`https://localhost:7179/api/Books/${id}`);
  };

  const input = (
    <form className ="form-inline">
      <div className ="form-group">
        <label className ="sr-only">
          ID:
        </label>
        <input type="number" className="form-control" id="id" value={id} onChange = {(event) => {setId(event.target.value)}}/>
      </div>
      <button type="button" className ="btn btn-danger" onClick={clickHandler}>
        Delete
      </button>
    </form>
  );



  useEffect(() => {
    axios
      .delete(url)
      .then((value) => {
        setBooks([value.data]);
        console.log(value.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [url, id, error]);

 return(
  <>
  {input}
</>
 );
}
