import { data } from "../../../data";
import { useState } from "react";
const UseStateArray = () => {

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearItem = () => {
    setPeople([]);
  };
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h2>useState array example</h2>
      {people.map((person) => {
        const {id,name}=person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={clearItem}
      >
        Clear all
      </button>
    </div>
  );
};

export default UseStateArray;
