import React from "react";
import "./App.css";
import PaymentFormWithEnums from "./PaymentFormWithEnums";
import PaymentFormWithoutEnums from "./PaymentFormWithoutEnums";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <PaymentFormWithEnums />
        <PaymentFormWithoutEnums />
      </header>
    </div>
  );
};

export default App;
