import { useState } from "react";

const ToggleChallenge = () => {
  const [alert,setAlert]=useState(true);
 
  const toggleAlert =() => {
    if (alert) {
      setAlert(false);
      return;
    } else {
      setAlert(true);
    }
  }
  return (<section>
    <h2>Toggle challenge</h2>
    <button type="button" onClick={toggleAlert}>Click me</button>
  </section>);

};

export default ToggleChallenge;
