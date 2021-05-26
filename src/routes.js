import { LOGIN_ROUTE, CHAT_ROUTE } from "./util/const";
import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
];
