import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { DashBoard, AddScore, Ranking, SearchInfo, Setting } from './components/Main'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/DashBoard" exact component={DashBoard}/>
                <Route path="/AddScore" component={AddScore}/>
                <Route path="/Ranking" component={Ranking}/>
                <Route path="/SearchInfo" component={SearchInfo}/>
                <Route path="/Setting" component={Setting}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes