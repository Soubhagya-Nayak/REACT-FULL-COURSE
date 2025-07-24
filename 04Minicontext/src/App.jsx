import "./App.css";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import UserContext from "./context/UserContext";
import { UserContextProvider } from "./context/UserContextProvider";

export const App = () => {
  return (
    <UserContextProvider>
      <h1>Code With Soubhagya</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};
