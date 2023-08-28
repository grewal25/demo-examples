import React from "react";
import "./App.css";
import TypeGuardExample from "./components/TypeGuardExample";

function App() {
  const isImage = true;
  return (
    <div className="App">
      <TypeGuardExample isImage={!isImage} />
    </div>
  );
}

export default App;
