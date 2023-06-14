import { useState, useEffect } from "react";
import axios from "axios";
import { DispTable } from "./DispTable";

const Put = (props) => {
  const data = {};
  const [id, setId] = useState(-1);
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState(0);

  const idHandler = (event) => {
    setId(parseInt(event.target.value, 10));
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const yearHandler = (event) => {
    setYear(parseInt(event.target.value, 10));
  };

  const isbnHandler = (event) => {
    setIsbn(event.target.value);
  };

  const authorHandler = (event) => {
    setAuthor(event.target.value);
  };

  const clickHandler = (event) => {
    data = {
      id: { id },
      title: { title },
      isbn: { isbn },
      author: { author },
      year: { year },
    };

    axios
      .put(`https://localhost:7179/api/Books/${id}`, data);
  };

  const form = (
    <form>
      <div className="form-group">
        <label>ID:</label>
        <input
          type="number"
          class="form-control"
          id="id"
          value={id}
          onChange={idHandler}
        />
      </div>
      <div class="form-group">
        <label>Title:</label>
        <input
          type="text"
          class="form-control"
          id="title"
          value={title}
          onChange={titleHandler}
        />
      </div>
      <div class="form-group">
        <label>ISBN:</label>
        <input
          type="text"
          class="form-control"
          id="isbn"
          value={isbn}
          onChange={isbnHandler}
        />
      </div>
      <div class="form-group">
        <label>Author:</label>
        <input
          type="text"
          class="form-control"
          id="author"
          value={author}
          onChange={authorHandler}
        />
      </div>
      <div class="form-group">
        <label>Year:</label>
        <input
          type="number"
          class="form-control"
          id="year"
          value={year}
          onChange={yearHandler}
        />
      </div>
      <button className="btn btn-primary" onClick={clickHandler}>
        Submit
      </button>
    </form>
  );
  return <>{form}</>;
};

export { Put };
