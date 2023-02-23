import { useState, useEffect } from "react";
import axios from "axios";
import Person from "./components/Person";

const App = () => {
  // well, it's right here - change this!
  /*
  const [persons, setPersons] = useState([
    { name: "Artu Hellas", number: "040-123456", important: true, id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", important: true, id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", important: false, id: 3 },
    { name: "Masha Smith", number: "39-23-6423122", important: false, id: 4 },
  ]);
  */

  const [persons, setPersons] = useState([]);

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const [showAll, setShowAll] = useState(false);

  const personsToShow = showAll
    ? persons
    : persons.filter((z) => z.name.toLowerCase().includes(newFilter));

  // TBD 2.12
  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newPerson,
      number: newNumber,
      important: Math.random() < 0.5,
      // id: persons.length + 1,
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
          // setPersons(persons.concat(personObject));
          axios
            .post("http://localhost:3001/persons", personObject)
            .then((response) => {
              console.log(response);
            });
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
