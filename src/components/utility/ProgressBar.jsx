import React, { useEffect, useState } from "react";

const ProgressBar = (props) => {
  const [progress, setProgress] = useState(0);
  const { bgcolor, completed } = props;
  const duration = 200;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          return 0;
        }
      });
    }, duration);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const progressbarStyles = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",

    fontSize: "1.8rem",
    color: "#222",
    paddingLeft: "0.2rem",
  };

  const progressbarContainerStyles = {
    backgroundColor: "#d7d4d4",
    width: "21vw",
    height: "0.2rem",
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    transition: "width 0.5s ease-out",
  };

  return (
    <div style={progressbarStyles}>
      <p>01</p>
      <div style={progressbarContainerStyles}>
        <div style={fillerStyles}></div>
      </div>
      <p>03</p>
    </div>
  );
};

export default ProgressBar;
