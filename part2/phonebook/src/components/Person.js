const Person = ({ person, handleDeletePerson }) => {
  return (
    <li>
      <strong>{person.name}</strong>:&nbsp;
      {person.number} &nbsp;
      <button onClick={() => handleDeletePerson(person.id, person.name)}>
        delete
      </button>
    </li>
  );
};

export default Person;
