import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

const handleChange = (e) =>{
  setName(e.target.value);
}
const handleSubmit = (e) =>{
  e.preventDefault();
}


  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled inputs</h4>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" name="" id="name" className="form-input" value={name} onChange={handleChange} />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input type="email" name="" id="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
