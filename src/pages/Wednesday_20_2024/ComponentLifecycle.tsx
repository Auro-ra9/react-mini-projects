// 8. Implement a timer component that starts counting when the component mounts and stops when it unmounts using useEffect.

import { useEffect, useState } from "react";

const ComponentLifecycle = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const startCountdown = setInterval(
      () => setTimer((prev) => prev + 1),
      1000
    );

    return () => {
      clearInterval(startCountdown);
    };
  }, []);
  return (
    <div>
      <p className="bg-slate-600">{timer}</p>
    </div>
  );
};

export default ComponentLifecycle;
