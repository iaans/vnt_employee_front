import React from "react";
import Sidebar from "./components/Sidebar";

import Routes from "./routes";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Sidebar />
      <div style={{ marginRight: "33%" }}>
        <Routes />
      </div>
    </div>
  );
}

export default App;
