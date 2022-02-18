import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./about";
import Posts from "./blog/posts";
import RepositoriesList from "./repositories-list";
import Home from "./home";
import TechStack from "./tech-stack";
import NotebookPost from "./blog/notebook-app/notebook-post";

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/about", exact: true, name: "About", component: About },
  {
    path: "/blog/notebook-app",
    exact: true,
    name: "Post",
    component: NotebookPost
  },
  {
    path: "/open-source",
    exact: true,
    name: "OpenSource",
    component: RepositoriesList
  },
  { path: "/blog", exact: true, name: "Blog", component: Posts },
  { path: "/tech-stack", exact: true, name: "Tools", component: TechStack }
];
const Navigation = () => {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          render={props => <route.component {...props} />}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default Navigation;
