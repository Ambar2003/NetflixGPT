import React from 'react'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Header from './Header';
import Browse from './Browse';
import Login from './Login';
import { useEffect } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter(
        [
            {
                path:"/",
                element:<Login></Login>
                
            },
            {
                path:"/browse",
                element:<Browse></Browse>
            },
            {
                path:"/header",
                element:<Header></Header>
            },
        ]
    );
    return(
        <RouterProvider router = {appRouter}></RouterProvider>
    )
};
export default Body;
