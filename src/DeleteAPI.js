import React from "react";
import axios from "axios";

const DeleteAPI = ({ bookId, onDelete }) => {
  const handleDelete = () => {
    axios
      .delete(`https://localhost:7179/api/Books/${bookId}`)
      .then(() => {
        onDelete();
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteAPI;
