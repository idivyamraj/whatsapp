import React from "react";
import Header from "./component/Header/Header";
import HomePage from "./HomePage/HomePage";

const App = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex-1 min-h-0">
        <HomePage />
      </div>
    </div>
  );
};

export default App;
