import React, { useEffect, useState } from "react";
import axios from "axios";

const Insert = () => {
  const [newBook, setNewBook] = useState({});
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState(0);



  const clickHandler = (event) => {
    event.preventDefault();
  
    axios
    .post("https://localhost:7179/api/Books", {
      title: title,
      isbn: isbn,
      author: author,
      year: year,
    })
    .then(() => {
    })
    .catch((error) => {
      console.error("Error inserting book:", error);
    });

    alert("Inserted!");
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

  

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={titleHandler}
          />
        </div>
        <div className="form-group">
          <label>ISBN:</label>
          <input
            type="text"
            className="form-control"
            id="isbn"
            value={isbn}
            onChange={isbnHandler}
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={authorHandler}
          />
        </div>
        <div className="form-group">
          <label>Year:</label>
          <input
            type="number"
            className="form-control"
            id="year"
            value={year}
            onChange={yearHandler}
          />
        </div>
        <button className="btn btn-primary" onClick={clickHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export { Insert };
