import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";
import propTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );

}
App.prototypes = {
  isLoggedIn: propTypes.bool,
}


App.defaultProps = {
  isLoggedIn: false,
}

export default App;
