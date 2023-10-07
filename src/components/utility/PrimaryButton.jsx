import React from "react";

const PrimaryButton = (props) => {
  return (
    <a href={props.link} className={props.className}>
      {props.text}
    </a>
  );
};

export default PrimaryButton;
