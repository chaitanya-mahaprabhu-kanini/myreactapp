import { useEffect, useState } from "react";
import { DispTable } from "./DispTable";
import axios from "axios";
const ReadId = () => {
    const [books, setBooks] = useState([]);
    const [id, setId] = useState(1);
    const [url, setUrl] = useState(``);

    const clickHandler = (event) => {
    setUrl(`https://localhost:7179/api/Books/${id}`);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((value) => {
        setBooks([value.data]);
        console.log(value.data);
      })
      .catch(error => {});
  }, [url, id]);

  const input = (
    <form className ="form-inline">
      <div className ="form-group">
        <label className ="sr-only">
          ID:
        </label>
        <input type="number" className="form-control" id="id" value={id} onChange = {(event) => {setId(event.target.value)}}/>
      </div>
      <button type="button" className ="btn btn-primary" onClick={clickHandler}>
        Submit
      </button>
    </form>
  );

  return (
    <>
      {input}
      <DispTable table = {books}/>
    </>
  );
};

export { ReadId };
