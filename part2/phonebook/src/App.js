import { useState, useEffect } from "react";
import Person from "./components/Person";
import personService from "./services/persons"; // TBD see this!

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [showAll, setShowAll] = useState(false);

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

  const handleAddPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newPerson,
      number: newNumber,
      important: Math.random() < 0.5,
      // id: persons.length + 1,
    };

    if (personObject.name.length === 0) {
      alert("attempting to add empty name. no ghosts allowed!");
      setNewPerson("");
      setNewNumber("");
      return;
    }

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === personObject.name) {
        if (
          window.confirm(
            `${persons[i].name} is already in the phonebook. 
              Would you like to update the number?`
          )
        ) {
          /// TBD 2.15
          personService
            .update(persons[i].id, personObject) //
            .then((returnedNote) => {
              setPersons(persons.concat(returnedNote));
            });
        }
      } else {
        if (i === persons.length - 1) {
          personService //
            .create(personObject)
            .then((returnedNote) => {
              setPersons(persons.concat(returnedNote));
            });
        }
      }
    }

    setNewPerson("");
    setNewNumber("");
  };

  const handleDeletePerson = (id, name) => {
    if (window.confirm(`Shall I delete ${name}?`)) {
      personService
        .deleter(id) //
        .then(() => {
          setPersons(persons.filter((n) => n.id !== id));
        });
    }
  };

  const handleChangePerson = (event) => {
    setNewPerson(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleChangeFilter = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <div>
          Filter: <input value={newFilter} onChange={handleChangeFilter} />
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "filter on" : "show all"}
          </button>
        </div>
      </div>
      <h2>Add a new victim ...</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input value={newPerson} onChange={handleChangePerson} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNumber} />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((x) => (
          <Person
            key={x.id}
            person={x}
            handleDeletePerson={handleDeletePerson}
          />
        ))}
      </ul>
      ...
    </div>
  );
};

export default App;
