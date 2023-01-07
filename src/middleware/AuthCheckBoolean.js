import { useHistory } from "react-router-dom";

const AuthCheckBoolean = () => {
  const history = useHistory();

  let loggedIn = false;

  if (localStorage.getItem("loggedIn")) {
    loggedIn = true;
  }

  return loggedIn;
};

export default AuthCheckBoolean;
