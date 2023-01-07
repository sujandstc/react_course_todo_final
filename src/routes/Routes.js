import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AddToDo from "../pages/add-todo/AddToDo";
import Login from "../pages/login/Login";
import MainPage from "../pages/mainPage/MainPage";
import NotFound from "../pages/notfound/NotFound";
import ViewPage from "../pages/ViewPage/ViewPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" component={MainPage} exact />

        <Route path="/add" exact>
          <AddToDo />
        </Route>

        <Route path="/login" component={Login} />

        <Route path="/view/:id" component={ViewPage} />

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
