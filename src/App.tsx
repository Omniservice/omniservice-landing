import React from "react";
import Routers from "./app/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routers />
      <ToastContainer />
    </>
  );
}

export default App;
