import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Routes,Navigate, useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { Switch } from "@material-ui/core";
import { useContext } from "react";

function PublicPage() {
    return (
        <div>
            <h2>Public page</h2>
            <p>Accessible to all users</p>
        </div>
    )
}

function ProtectedPage() {
    return (
        <div>
            <h2>Protected Page</h2>
            <p>Accessible to Registered Page</p>
        </div>
    )
}

const authContext = createContext();

function useAuth() {
    return useContext(authContext);
}

function LoginPage() {
    // it will access & store the context return by useAuth()
    let auth = useAuth();
    let navigate = useNavigate();
    let location = useLocation();
    // from is an object , if current state is active or this path is configured , it will access this location 
    let { from } = location.state || { from: { pathname: '/' } }
    let login = () => {
        // sign in is a function which is going to replace history with the state or with '/'
        auth.signin(() => {
            navigate.replace(from);
        })

    }

    return (
        <div>
            <p>Please login to view the protected page</p>
            <button onClick={login}>Login</button>
        </div>
    )
}

function AuthButton() {
    let navigate = useNavigate();
    let auth = useAuth();
    // auth is a context object in which we are defining another property called user
    return auth.user ? (<p>Welcome login success..!{""}<button onClick={()=>{auth.signout(()=>navigate("/"))}}>Logout</button></p>):(<p>You are not logged in Please Login </p>)
}

function PrivateRoute({children,...rest})
{
    let auth =useAuth();
    return(
        <Route {...rest} component render={({location})=> auth.user?(children):(<Navigate to={{pathname:"/login",state:{from:location}}} />) }  />
    )
}

function useProvideAuth(){
    const[user,setUser]=useState(null);
    const signin=callback=>{
        return fakeAuth.signin(()=>{
            setUser('user');
            callback();
        })
    }
    const signout=callback=>{
        return fakeAuth.signout(()=>{
            setUser(null)
            callback();
        })
    }
    return{
        user,
        signin,
        signout
    }
}

const fakeAuth={
   isAuthenticated:false,
   signin(callback){
    fakeAuth.isAuthenticated=true;
    setTimeout(callback,100);
   },
   signout(callback){
    fakeAuth.isAuthenticated=false;
    setTimeout(callback,100);
   }
}

function ProvideAuth({children}){
    const auth=useProvideAuth();
    return(
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

export default function SecurityDemo() {

    <ProvideAuth>
        <Router>
            <div>
                <AuthButton />
            </div>
            <ul>
                <li>
                    <Link to="/public">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/public" element={<PublicPage />} ></Route>
                <Route path="/login"element={<LoginPage />}></Route>
                <PrivateRoute path="/protected"><ProtectedPage /></PrivateRoute>
            </Routes>
        </Router>
    </ProvideAuth>

}







