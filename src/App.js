import React from "react";
import Navbar from "./components/Navbar";
import Student from "./components/Student";
import { StudentContextProvider } from "./context/StudentContext";

const App = () => {
  return (
    <StudentContextProvider>
      <Navbar />
    </StudentContextProvider>
  );
};

export default App;
