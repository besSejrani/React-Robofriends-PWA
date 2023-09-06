import React from "react";

// ========================================================================================================

const useUriServer = () => {
  let uri;
  if (process.env.NEXT_PUBLIC_APP_ENV === "development") {
    uri = process.env.NEXT_PUBLIC_DEVELOPMENT_SERVER;
  }

  if (process.env.NEXT_PUBLIC_APP_ENV === "staging") {
    uri = process.env.NEXT_PUBLIC_PRODUCTION_SERVER;
  }

  if (process.env.NEXT_PUBLIC_APP_ENV === "production") {
    uri = process.env.NEXT_PUBLIC_PRODUCTION_SERVER;
  }

  return uri;
};

export default useUriServer;
