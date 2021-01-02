import React, { FunctionComponent } from "react";

type ScrollProps = {
  children: JSX.Element[] | JSX.Element;
};

const Scroll: FunctionComponent<ScrollProps> = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid transparent",
        height: "750px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
