import { useState, useEffect } from "react";
import PurpleBookLogin from "../PurpleBookLogin/PurpleBookLogin";
import "./SplashScreen.less";

const SplashScreen = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationCompleted(true);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!animationCompleted ? (
        <div className="splash-screen">
          <div className="upper-part">
            <span className="text">P</span>
            <span className="text">U</span>
            <span className="text">R</span>
            <span className="text">P</span>
            <span className="text">L</span>
            <span className="text">E</span>
          </div>
          <div className="lower-part">
            <span className="text">B</span>
            <span className="text">O</span>
            <span className="text">O</span>
            <span className="text">K</span>
          </div>
        </div>
      ) : (
        <PurpleBookLogin />
      )}
    </>
  );
};

export default SplashScreen;
