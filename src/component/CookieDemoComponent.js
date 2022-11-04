import {React} from "react";
import { useCookies } from "react-cookie";
import { useState } from "react";

function Login(){
     const [message,setMessage]=useState('');
    //  we can have multiple cookies as well , here useemail is the name of the cookie
     const [cookies,setCookie]=useCookies(['useremail']);
    const CreateCookie=(email)=>{
        // whenever we call this function email will be stored inside localstorage 
        localStorage.setItem('email',email)
        setMessage('Cookie Created ')
        let now  =new Date();
        // this cookie will expire after 1 day 
        now.setTime(now.getTime()+24*60*60*1000);
        // here we are setting the cookie & path which is current root path
        setCookie('useremail',email,{path:'/'});
    }
    
    return(
        <div>
            {/* we will store email in cookies */}
            <label>Email:</label>
            <input type="email" onChange={(e)=>CreateCookie(e.target.value)} />
            <br />
            {message}
            <br/>
            Cookie Value: {cookies.useremail}
        </div>
    )
}

export default Login;