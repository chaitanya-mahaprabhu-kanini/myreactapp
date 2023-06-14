import { useEffect } from "react";

const DispTable = (props) => {
  useEffect(() => {
    console.log(props.table + "Disp");
  }, []);

  const result = (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>ISBN</th>
          <th>Author</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {props.table.map((value) => (
          <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.title}</td>
            <td>{value.isbn}</td>
            <td>{value.author}</td>
            <td>{value.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return <>{result}</>;
};

export { DispTable };
