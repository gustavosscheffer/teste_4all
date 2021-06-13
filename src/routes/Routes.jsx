import { Grid } from "@material-ui/core";
import React from "react";
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Forms from "../pages/form";
import Home from '../pages/home'
import Menu from '../pages/menu';

export default function Routes() {
    return (
        <Router>
            <div style={{padding:"20px"}}>
                <Grid container>
                    <Grid item xs={1}/>
                    <Grid item xs={10}>
                        <Switch>
                            <Route path="/">
                                {/* <Home /> */}
                                <Forms/>
                            </Route>
                            <Route path="/Menu">
                                <Menu/>
                            </Route>
                            <Route path="/Forms">
                                <Forms/>
                            </Route>
                        </Switch>
                    </Grid>
                    <Grid item xs={1}/>
                </Grid>
            </div>
        </Router>
    );
}
