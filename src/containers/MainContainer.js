import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import PirateContainer from './PirateContainer.js';
import ShipContainer from "./shipContainer";
import RaidContainer from "./RaidContainer";

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Switch>
        <Route path="/pirates" component={PirateContainer}/>
        <Route path="/ships" component={ShipContainer}/>
        <Route path="/Raids" component={RaidContainer}/>

      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
