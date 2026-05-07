/*function Studentcard(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Marks: {props.marks}</p>
      <p>Grade: {props.grade}</p>
    </div>
  );
}

export default Studentcard;
*/

function Studentcard({name, marks, grade}) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Marks: {marks}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}
export default Studentcard;