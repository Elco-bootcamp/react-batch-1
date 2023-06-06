import React from "react";

function Buttons({ title, onClick }) {
  return <button onClick={onClick}>{title}</button>;
}

export default Buttons;
