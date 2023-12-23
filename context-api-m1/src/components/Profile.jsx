import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div className="ps-5 py-5">Please Login</div>;
  return <div className="ps-5 py-5">Wellcome {user.username} !</div>;
};

export default Profile;
