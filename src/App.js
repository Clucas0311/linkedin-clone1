import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      {/* App body */}
      <div className="app__body">
        <Sidebar />
        {/* SideBar */}
        {/* Feed */}
        {/* Widgits */}
      </div>
    </div>
  );
}

export default App;
