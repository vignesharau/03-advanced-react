import { Person } from './Person';
import { people } from "../../../data";

const list = () => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.name} {...person}/>;
      })}
    </div>
  );
};
export default list;
