import React from "react";

export const Card = (props) => {
  return (
    <>
      <div className="info-container">{props.children}</div>
    </>
  );
};
