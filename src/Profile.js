import React from "react";
import "./Profile.css";
import Nav from "./Nav";
import { auth } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Plans from "./Plans";

function Profile() {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Profile</h1>
        <div className="profile__info">
          <img src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg" alt="" />

          <div className="profile__details">
            <h2>{user?.email}</h2>
            <div className="profile__plans">
              <h3>Current Plan</h3>
              <Plans />
              <button
                onClick={() => auth.signOut()}
                className="profile__signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
