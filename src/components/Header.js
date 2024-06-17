import React from 'react'
import { netflixLogo } from '../utils/constant'
import { avatar } from '../utils/constant';
import {createUserWithEmailAndPassword} from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import {signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const toggleLanguageDropDown = useSelector(store =>store.gpt.showGPTSearch);
  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return() => unsubscribe()
    },[]);
const handleSignOut = () =>{
  signOut(auth).then(() => {
    navigate("/");
  }).catch((error) => {
    navigate("/error");
  });

}
const handleGPTSeachClick = () =>{
  dispatch(toggleGptSearchView());
}
const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
}
  return(
      
    <div className="bg-gray-800 flex justify-between w-[99vw]">

      <div>
      <img className = "h-32 mx-1"src = {netflixLogo} alt = "logo"/>
    </div>
    <div className="flex">
      <div className = "mt-9">
      {toggleLanguageDropDown && <select className="p-4 bg-purple-600 p-4 rounded-lg text-white cursor-pointer text-xl hover:bg-purple-900" onChange = {handleLanguageChange}>
        <option>English</option>
        <option>Hindi</option>
        <option>Kannada</option>
      </select>}
      </div>
    <button className="text-white text-2xl" onClick={handleGPTSeachClick}><span className = "bg-purple-800 p-4 hover:bg-purple-900 rounded-lg mx-4">{toggleLanguageDropDown?"Home":"GPT Search"}</span></button>
      <img alt = "user" src = {avatar} className = "my-5 w-28 h-20"></img>
      <h1 className = "text-white mx-[-0.5rem] py-12 px-4 text-2xl">{user?.displayName}</h1>
      <button className="text-white text-2xl mx-[-0.5rem]" onClick={handleSignOut}><span className = "hover:bg-slate-600 mx-4">Sign Out</span></button>
    </div>
    </div>
  );
};
export default Header
