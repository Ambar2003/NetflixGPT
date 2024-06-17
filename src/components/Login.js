import React, { useState, useRef, useEffect } from "react";
import { background } from "../utils/constant";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { Logo } from "./Logo";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/browse");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClick = () => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, { displayName: name.current.value })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <div className="relative">
      <Logo />
      <div>
        <img src={background} alt="netflix-bg" className="h-fit" />
        <form onSubmit={(e) => e.preventDefault()} className="absolute bottom-80 mx-[38rem] my-[-2rem] bg-black p-8 rounded-lg w-80 bg-opacity-70">
          <h1 className="text-white text-4xl mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input type="text" placeholder="Name" className="p-2 m-3" ref={name} />}
          <input type="text" placeholder="Email or Phone Number" className="p-2 m-3" ref={email} />
          <input type="password" placeholder="Password" className="p-2 m-3" ref={password} />
          <button className="bg-red-700 mx-4 w-48 p-3 rounded-lg text-2xl" onClick={handleClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className="text-white p-3 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up" : "Already Registered? Sign In"}</p>
          <p className="text-red-600">{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
