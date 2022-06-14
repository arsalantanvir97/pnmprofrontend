import React from "react";
import Login from "./Screens/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import Driver from "./Screens/Driver";
import Users from "./Screens/Users";
import Bookings from "./Screens/Bookings";
import PaymentLogs from "./Screens/PaymentLogs";
import Feedback from "./Screens/Feedback";
import Promos from "./Screens/Promos";
import VehicleTypes from "./Screens/VehicleTypes";
import Reports from "./Screens/Reports";
import ChangePassword from "./Screens/ChangePassword";
import PrivateRoute from "./Components/PrivateRoute";
import EditProfile from "./Screens/EditProfile";
import ForgotPassword from "./Screens/ForgotPassword";
import VerificationCode from "./Screens/VerificationCode";
import ResetPassword from "./Screens/ResetPassword";
import NewDriver from "./Screens/NewDriver";
import AddVehicleTypes from "./Screens/AddVehicleTypes";
import EditVehicleType from "./Screens/EditVehicleType";
import UserDetails from "./Screens/UserDetails";
import DriverDetails from "./Screens/DriverDetails";
import PaymentDetails from "./Screens/PaymentDetails";
import BookingDetail from "./Screens/BookingDetail";

const App = () => {
  return (
    <Router basename="/pnmpro/admin">
      <Route path="/" component={Login} exact />
      <Route exact path="/ForgotPassword" component={ForgotPassword} />
      <Route
        path="/verificationcode:email"
        component={VerificationCode}
        exact
      />
      <Route path="/resetPassword" component={ResetPassword} exact />

      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/Driver" component={Driver} />
      <PrivateRoute exact path="/Users" component={Users} />
      <PrivateRoute exact path="/Bookings" component={Bookings} />
      <PrivateRoute exact path="/PaymentLogs" component={PaymentLogs} />
      <PrivateRoute exact path="/Feedback" component={Feedback} />
      <PrivateRoute exact path="/Promos" component={Promos} />
      <PrivateRoute exact path="/VehicleTypes" component={VehicleTypes} />
      <PrivateRoute exact path="/Reports" component={Reports} />
      <PrivateRoute exact path="/Profile" component={EditProfile} />
      <PrivateRoute exact path="/ChangePassword" component={ChangePassword} />
      <PrivateRoute exact path="/NewDriver" component={NewDriver} />
      <PrivateRoute exact path="/AddVehicleTypes" component={AddVehicleTypes} />
      <PrivateRoute exact path="/PaymentDetails" component={PaymentDetails} />
      <PrivateRoute exact path="/BookingDetail" component={BookingDetail} />
      <PrivateRoute
        exact
        path="/EditVehicleType/:id"
        component={EditVehicleType}
      />
      <PrivateRoute exact path="/UserDetails/:id" component={UserDetails} />
      <PrivateRoute exact path="/DriverDetails/:id" component={DriverDetails} />
    </Router>
  );
};

export default App;
