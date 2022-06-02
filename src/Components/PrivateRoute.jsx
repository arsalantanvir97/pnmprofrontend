import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Height from "./Height";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  return (
    <Route
      {...rest}
      render={(props) =>
        !adminInfo ? (
          <Redirect to="/" />
        ) : (
          <>
            <Header {...props}/>
            <Sidebar {...props}/>
            <Height/>
            <Component {...props} />
          </>
        )
      }
    />
  );
};

export default PrivateRoute;
