import React from "react";
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Logo from '../components/logo';

export default function Routes() {
    return (
        <Router>
            <div>
                <Logo/>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
