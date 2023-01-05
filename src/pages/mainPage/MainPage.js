import NavBar from "../NavBar";

import { FaRegEye } from "react-icons/fa";
import { CgOptions } from "react-icons/cg";
import { Link } from "react-router-dom";

const MainPage = () => {
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h3>Your to-do:</h3>

        {getTodo.map((el, index) => (
          <>
            <div className="single_todo">
              {el}

              <div>
                <Link to={`/view/${index}`}>
                  <FaRegEye size={"20px"} />
                </Link>
              </div>
            </div>
          </>
        ))}

        {/* <div className="single_todo">Todo 1</div>
        <div className="single_todo">Todo 2</div> */}
      </div>
    </>
  );
};

export default MainPage;
