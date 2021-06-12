import { Grid } from "@material-ui/core";
import React from "react";
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Logo from '../components/logo';
// import Home from '../pages/home'
import Menu from '../pages/menu'

export default function Routes() {
    return (
        <Router>
            <div style={{padding:"20px"}}>
                <Grid container>
                    <Grid item xs={12} style={{textAlign:"center"}}>
                        <Logo />
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={10}>
                        <Switch>
                            <Route path="/">
                                {/* <Home /> */}
                                <Menu/>
                            </Route>
                            <Route path="/Menu">
                                <Menu/>
                            </Route>
                        </Switch>
                    </Grid>
                    <Grid item xs={1}/>
                </Grid>
            </div>
        </Router>
    );
}
