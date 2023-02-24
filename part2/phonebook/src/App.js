import { useState, useEffect } from "react";
import axios from "axios";
import Person from "./components/Person";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const [showAll, setShowAll] = useState(false);

  // 2.13
  /*
  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  };
  useEffect(hook, []);
  */

  useEffect(() => {
    personService // _
      .getAll()
      .then((initialNotes) => {
        setPersons(initialNotes);
      });
  }, []);

  const personsToShow = showAll
    ? persons
    : persons.filter((z) => z.name.toLowerCase().includes(newFilter));

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
          personService //
            .create(personObject)
            .then((returnedNote) => {
              setPersons(persons.concat(returnedNote));
              setNewPerson("");
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
