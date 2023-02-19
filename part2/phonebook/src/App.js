import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", important: true, id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", important: true, id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", important: false, id: 3 },
    { name: "Masha Smith", number: "39-23-6423122", important: false, id: 4 },
    {
      name: "Mary Pop",
      number: "39-23-6122",
      important: true,
      id: 5,
    },
    { name: "Gasho ", number: "22", important: false, id: 6 },
    { name: "Gregg Hjorth", number: "3122", important: true, id: 7 },
    {
      name: "Avinash Schmidt",
      number: "322",
      important: false,
      id: 8,
    },
  ]);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const [showAll, setShowAll] = useState(false);

  const personsToShow = showAll
    ? persons
    : persons.filter((z) => z.name.includes(newFilter));

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newPerson,
      number: newNumber,
      important: Math.random() < 0.5,
      id: persons.length + 1,
    };
    for (let i = 0; i < persons.length; i++) {
      if (personObject.name.length === 0) {
        alert("attempting to add empty name. no ghosts allowed!");
        break;
      }
      if (persons[i].name === personObject.name) {
        alert(`${persons[i].name} is already in phonebook`);
        break;
      } else {
        if (i === persons.length - 1) {
          setPersons(persons.concat(personObject));
        }
      }
    }
    setNewPerson("");
    setNewNumber("");
  };

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <div>
          Filter: <input value={newFilter} onChange={handleFilterChange} />
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "filter on" : "show all"}
          </button>
        </div>
      </div>
      <h2>Add a new victim ...</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson} onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((x) => (
          <Person key={x.id} person={x} />
        ))}
      </ul>
      ...
    </div>
  );
};

export default App;
