// Router
import { Navigate } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";
import { IAppState } from "@Redux/rootReducer";

// ======================================================================================

function withAuthentication(Component) {
  return function (props) {
    // const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state: IAppState) => state.ui.user);

    if (!user.isAuth) {
      return <Navigate to="/login" replace />;
    }

    return <Component {...props} />;
  };
}

export default withAuthentication;
