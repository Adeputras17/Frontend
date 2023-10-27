import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Tryout from "./components/Tryout";
import Sidebar from "./components/Sidebar";

import "./App.css"

const Layout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Navbar />
          <Outlet/>
        </div>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/tryout",
        element: <Tryout />,
      },

    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;