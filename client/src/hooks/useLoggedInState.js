import { useState, useEffect } from 'react';
import axios from 'axios';

const DOMAIN = "";
const PORT = "";

export default function useLoggedInState(initial) {

  const [loggedInState, setLoggedInState] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  });

  // Helper Function // setState : Login
  const handleLoginState = function (data) {
    setLoggedInState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
    console.log("handleLoginState (HOOK)", loggedInState)
  };
  
  // Helper Function // setState : Logout
  const handleLogoutState = function () {
    setLoggedInState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  };
  
  // mentioned in tutorial , not yet seeing its use, but kept it for reference
  const handleSuccessfulAuth = function (data) {
    handleLoginState(data);
    checkLoginStatus();
    // props.history.push("/dashboard"); // <- this is related to react-router
  };


  const checkLoginStatus = function () {
    axios
      .get(`http://localhost:3000/logged_in`, { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          loggedInState.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          // handleLoginState(response.data);
          setLoggedInState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &&
          (loggedInState.loggedInStatus === "LOGGED_IN")
        ) {
          handleLogoutState()
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });

      // return loggedInState // ??
  };


  const handleLogoutClick = function () {
    axios
      .delete(`http://localhost:3000/logout`, { withCredentials: true })
      .then(response => {
        console.log("Logout response : ", response)
        handleLogoutState();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  };

  return (
    {
      loggedInState,
      handleSuccessfulAuth,
      checkLoginStatus,
      handleLogoutClick
    }
  )
}