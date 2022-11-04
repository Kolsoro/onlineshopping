import React,{useContext, useState} from "react";

var userDetailsContext=React.createContext(null)

export default function ContextDemoComponent(){
    // these values are intialized in userDetails object 
    var [userDetails]=useState({
        name:'john',
        email:'john@gmail.com'
    })
    return(
        <>
            <userDetailsContext.Provider value={userDetails}>
                <h1>Main Component</h1>
                <HomeComponent />
            </userDetailsContext.Provider>
        </>
    )
}


function HomeComponent(props){
    var contextData=useContext(userDetailsContext);
    return(
        <div>
            <h3>Home Component - Hello ! {contextData.name}</h3>
            <InboxComponent />
        </div>
    )
}

function InboxComponent(props){
    var contextData=useContext(userDetailsContext)
    return(
        <div>
               <h3>Inbox component</h3>
               <dl>
                <dt>User Name</dt>
                <dd>{contextData.name}</dd>
                <dt>Email</dt>
                <dd>{contextData.email}</dd>
               </dl>
        </div>
    )
}