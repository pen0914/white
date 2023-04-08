import "./styles.css";
import React, { useState } from "react";
import { Reload } from "./Reload";

export default function App() {
  const [on, setOn] = useState(0);
  return (
    <div>
      <Reload on={on} setOn={setOn} />
    </div>
  );
}
