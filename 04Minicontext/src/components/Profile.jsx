import { useContext } from "react";
import UserContext from "../context/UserContext";

export const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Login Please!</div>;
  return <div>Welcom, {user.username}</div>;
};
