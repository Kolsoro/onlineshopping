import React, { useState, useContext, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory, useLocation, Link } from 'react-router-dom';
function PublicPage() {
    return (
        <h2>Public Page</h2>)
}
function ProtectedPage() {
    return (
        <h2>Protected Page</h2>)
}
const authContext = createContext();
function useAuth() {
    return useContext(authContext);
}
function LoginPage() {
    let auth = useAuth();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        auth.signin(() => {
            history.replace(from);

        })
    }
    return (<div>
        <p>Please Login to View Protected Page</p>
        <button onClick={login}>Login</button>
    </div>)
}
function AuthButton() {
    let history = useHistory(); let auth = useAuth();

    return auth.user ? (<p>Welcome login success.. ! {" "} <button onClick={() => { auth.signout(() => history.push("/")) }} >Logout</button> </p>) : (<p>You are not logged in..Please Login..</p>)
}
function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
        <Route
            {...rest} //path, component
            render={({ location }) => auth.user ? (children) : (<Redirect to={{ pathname: "/login", state: { from: location } }} />)}
        />)

}
function useProvideAuth() {
    const [user, setUser] = useState(null); const signin = callback => {
        return fakeAuth.signin(() => {
            setUser("user"); callback();
        })
    }
    const signout = callback => {
        return fakeAuth.signout(() => {
            setUser(null);
            callback();
        })
    }

    return {
        user,
        signin,
        signout
    }
}
const fakeAuth = {
    isAuthenticated: false, signin(callback) {
        fakeAuth.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    signout(callback) {
        fakeAuth.isAuthenticated = false; setTimeout(callback, 100);
    }

}
function ProvideAuth({ children }) {
    const auth = useProvideAuth(); return (
        <authContext.Provider value={auth}> {children}
        </authContext.Provider>)
}
export default function SecurityDemo() {
    return (
        <ProvideAuth> <Router>
            <div>

                <AuthButton /> </div>
            <ul> <li>
                <Link to="/public">Public Page</Link>
            </li> <li>
                    <Link to="/protected">Protected Page</Link>
                </li> </ul>
            <Switch>
                <Route path="/public">
                    <PublicPage /> </Route>
                <Route path="/login">

                    <LoginPage /> </Route> <PrivateRoute
                        path="/protected"> <ProtectedPage />
                </PrivateRoute> </Switch>
        </Router> </ProvideAuth>
    )
}