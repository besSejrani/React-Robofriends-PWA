import React from "react";

// ========================================================================================================

const useUriServer = () => {
  let uri;
  if (process.env.REACT_APP_ENV === "development") {
    uri = process.env.REACT_APP_DEVELOPMENT_SERVER;
  }

  return uri;
};

export default useUriServer;
