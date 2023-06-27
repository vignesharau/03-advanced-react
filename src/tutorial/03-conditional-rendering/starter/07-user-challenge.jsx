import { useState } from "react";

const UserChallenge = () => {
  const [ user, setUser ] = useState(null);
  const logout = () => {
    setUser(null);
  };
  const login = () => {
    setUser({ name: "vignesh" });
  };
  return (
    <>
      <h2>user challenge</h2>
      {user ? (
        <div>
          <h4> Hello {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please logins</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
