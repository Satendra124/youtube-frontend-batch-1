import { useEffect, useState } from "react";

function Timer() {
  const [second, setSeconds] = useState(10);

  useEffect(myCallback, []);
  const targetDate = new Date();
  const targetSecond = targetDate.getTime() / 1000 + 10;

  useEffect(onceRunningFunction, []);

  function onceRunningFunction() {
    setInterval(myCallback, 1000);
  }

  function myCallback() {
    const nowDate = new Date();
    const nowSeconds = nowDate.getTime() / 1000;
    const dif = targetSecond - nowSeconds;
    if (dif > 0) {
      setSeconds(dif);
    }
  }

  return <div>{Math.floor(second)}</div>;
}

export default Timer;
