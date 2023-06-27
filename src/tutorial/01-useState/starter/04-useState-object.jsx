import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: "24",
    hobby: "read book",
  });

  const displayPerson = () => {
    setPerson({ name: "john", age: "20", hobby: "game" });
  };
  const {name,age,hobby}=person;
  return (
    
    <div>
      <h2>useState object example</h2>
      <h1>{name}</h1>
      <h3>{age}</h3>
      <h2>{hobby}</h2>
      <button type="button" onClick={displayPerson}>
        Click me
      </button>
    </div>
  );
};

export default UseStateObject;
