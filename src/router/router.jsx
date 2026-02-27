import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/RootLayout";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import SingupForm from "../pages/SingupForm";
import Login from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", index: true, element: <Shop /> },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      { path: "/sing-up", element: <SingupForm /> },
      { path: "/login", element: <Login /> },
      // { path: "/notes", element: <Notes /> },
      // { path: "/team", element: <Team /> },
      // { path: "/posts", element: <Posts /> },
      // { path: "/userlist", element: <UserList /> },
      // { path: "/shop", element: <Shop /> },
      // { path: "/addproduct", element: <AddProduct /> },
      // { path: "/singup", element: <SingUp /> },
    ],
  },
]);
