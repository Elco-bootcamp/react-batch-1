import React, { useState } from "react";
import "./App.css";
import CustomButton from "./component";

function App() {
  const [data, setData] = useState(0);

  const tambahData = (props1, props2) => {
    setData(data + 1);
  };

  return (
    <div className="App">
      <CustomButton onClick={tambahData} title={data} />
    </div>
  );
}

export default App;
