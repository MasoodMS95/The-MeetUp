// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };


  const setChevron = () => {
    if(showMenu){
      return (
        <i class="fa-solid fa-chevron-down" />
      )
    }
    else{
      return (
        <i class="fa-solid fa-chevron-up" />
      )
    }
  }

  useEffect(() => {
    setChevron();
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
        {setChevron()}
      </button>
      {showMenu && <ul className={ulClassName} ref={ulRef}>
        <li>Username: {user.username}</li>
        <li>Name: {user.firstName} {user.lastName}</li>
        <li>Email: {user.email}</li>
        <li>
          <button onClick={logout}>Log Out</button>
        </li>
      </ul>}
    </>
  );
}

export default ProfileButton;