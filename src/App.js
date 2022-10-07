import React from "react";
import Navbar from "./components/Navbar";
import Student from "./components/Student";
import { StudentContextProvider } from "./context/StudentContext";

const App = () => {
  return (
    <StudentContextProvider>
      <Navbar />
      <Student />
    </StudentContextProvider>
  );
};

export default App;
