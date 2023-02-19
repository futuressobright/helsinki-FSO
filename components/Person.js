const Person = ({ person }) => {
  return (
    <li>
      <strong>{person.name}</strong>:&nbsp; &nbsp; &nbsp; {person.number}
    </li>
  );
};

export default Person;
