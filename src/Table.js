import emp from './images/emp.png';
function Table() {
  const style1 = { border: "0.5rem solid black", marginTop: "5rem" };
  const style2 = { fontFamily: "tahoma" };
  const style3 = { backgroundColor: "steelblue", color: "white" };
  const combined = { ...style1, ...style2, ...style3 };
  const employee = [
    {
      id: 101,
      name: "ABC",
      img: emp,
      skills: [
        {
          name: "React",
          type: "FrontEnd",
        },
        {
          name: "Mongo",
          type: "BackEnd",
        },
      ],
    },
  ];
  return (
    <div style={combined}>
      <table class="table table-hover">
      <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Image</td>
            <td>Skills</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id} - {emp.name}</td>
              <td>
                <img src={emp.img} alt="Employee" />
              </td>
              <td>
                {emp.skills.map((skill) => (
                  <span>{skill.name}, </span>
                ))}
              </td>
              <td>
                {emp.skills.map((skill) => (
                  <span>{skill.type}, </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export { Table };
