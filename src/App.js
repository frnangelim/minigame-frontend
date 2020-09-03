import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./views/Home/Home";
import Difficulty from "./views/Difficulty/Difficulty";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/dificuldade">
                        <Difficulty />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
