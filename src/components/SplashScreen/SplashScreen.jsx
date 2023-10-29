import React, { useEffect, useRef } from "react";
import PurpleBookLogin from "../PurpleBookLogin/PurpleBookLogin";
import "./SplashScreen.less";

const SplashScreen = () => {
  const splashScreenRef = useRef(null);

  useEffect(() => {
    const splashScreenElement = splashScreenRef.current;
    const handleAnimationEnd = () => {
      splashScreenElement.style.display = "none";
    };

    setTimeout(() => {
      splashScreenElement.addEventListener("animationend", handleAnimationEnd);
    }, 2700);

    return () => {
      splashScreenElement.removeEventListener(
        "animationend",
        handleAnimationEnd
      );
    };
  }, []);

  return (
    <>
      <div className="splash-screen" ref={splashScreenRef}>
        <div className="upper">
          <span className="text">P</span>
          <span className="text">U</span>
          <span className="text">R</span>
          <span className="text">P</span>
          <span className="text">L</span>
          <span className="text">E</span>
        </div>
        <div className="lower">
          <span className="text">B</span>
          <span className="text">O</span>
          <span className="text">O</span>
          <span className="text">K</span>
        </div>
      </div>
      <PurpleBookLogin />
    </>
  );
};

export default SplashScreen;
