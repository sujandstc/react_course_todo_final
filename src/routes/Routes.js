import { Route } from "react-router-dom";
import AddToDo from "../pages/add-todo/AddToDo";
import MainPage from "../pages/mainPage/MainPage";
import ViewPage from "../pages/ViewPage/ViewPage";

const Routes = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/add" component={AddToDo} exact />

      <Route path="/view/:id" component={ViewPage} exact />
    </>
  );
};

export default Routes;
