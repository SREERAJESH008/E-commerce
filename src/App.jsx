import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/nav";
import Slide from "./components/slide/slide";
import Shop from "./components/shop/shop.jsx";
import Login from "./components/login/login.jsx";
import Cart from "./components/cart/cart.jsx"
import Root from "./components/route/root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Down from "./components/downbar/down.jsx";
// import { FirebaseApp} from "./components/firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Slide />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart/>,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="baground-img ">
        <RouterProvider router={router} />
      </div>
      <Down />
    </>
  );
}

export default App;
