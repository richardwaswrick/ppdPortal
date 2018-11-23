import Home from "./modules/home/homeComponent";
import RequireAuth from "./components/auth/requireAuth";
import login from "./modules/login/loginMessage";
import Tasks from "./modules/admin/tasks/index"
import Entities from "./modules/admin/entities/index"

export const routes = [
  {
    key: "appRoute",
    component: login,
    path: "/",
    exact: true
  },
  {
    key: "homeRoute",
    component: RequireAuth(Home),
    path: "/home"
  },
  {
    key: "taskGridRoute",
    component: RequireAuth(Tasks),
    path: "/admin/tasks"
  },
  {
    key: "entityGridRoute",
    component: RequireAuth(Entities),
    path: "/admin/entities"
  }
];

export default routes;
