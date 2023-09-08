// ========================================================================================================

const useUri = () => {
  let uri;
  if (process.env.REACT_APP_ENV === "development") {
    uri = process.env.REACT_APP_DEVELOPMENT_CLIENT;
  }

  return uri;
};

export default useUri;
