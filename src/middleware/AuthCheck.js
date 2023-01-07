import { useHistory } from "react-router-dom";

const AuthCheck = () => {
  const history = useHistory();

  //   if (localStorage.getItem("loggedIn")) {
  //     // Do nothing...
  //   } else {
  //     history.replace("/login");
  //   }

  !localStorage.getItem("loggedIn") && history.replace("/login");

  //   localStorage.getItem("loggedIn") ? (() => {})() : history.replace("/login");
};

export default AuthCheck;
