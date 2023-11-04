import { useEffect, useState } from "react";
import "./hook.css";

function HookComponent() {
  const [clicks, setClicks] = useState(0);

  function onClickFunction() {
    setClicks(clicks + 1);
  }

  return (
    <div>
      <span>{clicks}</span>
      <button onClick={onClickFunction}>Click</button>
    </div>
  );
}

export default HookComponent;
