import NavBar from "../NavBar";

import { FaRegEye } from "react-icons/fa";
import { CgOptions } from "react-icons/cg";
import { Link, Route, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  return (
    <>
      <NavBar />

      <div className="todo_container">
        {localStorage.getItem("loggedIn") ? (
          <>
            You are already logged in!{" "}
            <b
              onClick={() => {
                localStorage.removeItem("loggedIn");
                history.push("/");
              }}
              style={{ color: "red", cursor: "pointer" }}
            >
              Logout
            </b>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                alert("You are successfully logged in!");
                history.replace("/");
                localStorage.setItem("loggedIn", true);
              }}
            >
              Login!
            </button>
            <br />
            <br />
            <Link to="/login/showInfo">Nested Route | Show Info</Link>
            <br /> <br />
            <br />
            {/* Nested routing */}
            <Route path="/login/showInfo">
              <div>
                This is dummy login and doesnot communicate with server.
              </div>
            </Route>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
