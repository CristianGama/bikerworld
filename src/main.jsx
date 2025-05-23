import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "./App";
import Menu from "./menu/menu.jsx"
import Bicicletas from "./bicicletas/bicicletas.jsx"
import Nosotros from "./nosotros/nosotros.jsx"
import Terminos from "./terminos/terminos.jsx"
import Politicas from "./politicas/politicas.jsx"
import Carrito from "./carrito/carrito.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {index:true, element: <Menu/>},
      {path: "bicicletas", element: <Bicicletas/>},
      {path: "nosotros", element: <Nosotros/>},
      {path: "terminos", element: <Terminos/>},
      {path: "politicas", element: <Politicas/>},
      {path: "carrito", element: <Carrito/>}
    ]
  },

]);

window.addEventListener("DOMContentLoaded", (event => {
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
  
}))
