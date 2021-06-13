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
            <div style={{padding:"10px"}}>
                <Grid container>
                    <Grid item xs={1} md={3}/>
                    <Grid item xs={10} md={6}>
                        <Switch>
                            <Route path="/">
                                <Home />
                            </Route>
                            <Route path="/Menu">
                                <Menu/>
                            </Route>
                            <Route path="/Forms">
                                <Forms/>
                            </Route>
                        </Switch>
                    </Grid>
                    <Grid item xs={1} md={3}/>
                </Grid>
            </div>
        </Router>
    );
}
