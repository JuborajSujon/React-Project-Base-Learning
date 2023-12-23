import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-white p-5 text-center text-4xl bg-slate-700">
        React Context API - With Hitesh Choudhary
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
