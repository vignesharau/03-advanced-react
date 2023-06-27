import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h2>cleanup function</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle me
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    console.log("hmm, this is interesting");
    const intID = setInterval(() => {
      console.log("hello from interval");
    }, 1000);
    return () => {
      clearInterval(intID);
    };
  }, []);
  return <h1>hello there</h1>;
};

export default CleanupFunction;
