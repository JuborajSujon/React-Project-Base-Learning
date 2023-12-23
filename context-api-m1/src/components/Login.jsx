import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="ps-5 mb-5">
      <h2 className="text-3xl py-5">User Login Form</h2>

      <input
        className="mr-4 border-2 border-slate-300 rounded-sm p-2 "
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="uesrname"
      />
      <input
        className="mr-4 border-2 border-slate-300 rounded-sm p-2 "
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
