import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SearchIntern from "./component/SearchIntern.jsx";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Layout from "./component/Layout.jsx";
 import Network from "./Navroute/Network.jsx";
  import Messaging from "./Navroute/Messaging.jsx";
    import Notification from "./Navroute/Notification.jsx";
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="network" element={<Network />} />
      <Route path="messaging" element={<Messaging />} />
      <Route path="notifications" element={<Notification />} />

      <Route path="Searchintern"  element={<SearchIntern/>}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
