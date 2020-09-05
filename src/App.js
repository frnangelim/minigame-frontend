import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PlayerInfo from "./views/PlayerInfo/PlayerInfo";
import Home from "./views/Home/Home";
import Game from "./views/Game/Game";
import Ranking from "./views/Ranking/Ranking";


export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/ranking">
                        <Ranking />
                    </Route>
                    <Route path="/player">
                        <PlayerInfo />
                    </Route>
                    <Route path="/game">
                        <Game />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
