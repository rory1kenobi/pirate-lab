import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PirateList from '../components/pirates/PirateList';
import PirateDetail from "../components/pirates/PirateDetail"; 
import PirateForm from "../components/pirates/PirateForm";
import Request from '../helpers/request';

const PirateContainer = () => {

  const [pirates, setPirates] = useState([])
  const [ships, setShips] = useState([])
  const [raids, setRaids] = useState([])

  useEffect(() => {
    fetchPirates();
    fetchShips();
    fetchRaids();
  }, [])

  const fetchPirates = () => {
    fetch('http://localhost:8080/api/pirates')
    .then(response => response.json())
    .then(data => setPirates(data))
  }

  const fetchShips = () => {
    fetch('http://localhost:8080/api/ships')
    .then(responce => responce.json())
    .then(data => setShips(data))
  }

  const fetchRaids = () => {
    fetch('http://localhost:8080/api/raids')
    .then(response => response.json())
    .then(data => setRaids(data))
  }

  const findPirateById = (id) => {
    return pirates.find((pirate) => {
      return pirate.id === parseInt(id);
    })
  }

  const handlePost = (pirate) => {
    const request = new Request();
    const url = "/api/pirates";
    request.post(url, pirate)
    .then(() => {window.location = "/pirates"})
  }

  const handleUpdate = (pirate) => {
    const request = new Request();
    request.patch("/api/pirates/" + pirate.id, pirate)
    .then(() => {
      window.location = "/pirates/" + pirate.id
    })
  }


    return(
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/pirates/new" render={() => {
              return <PirateForm ships={ships} onCreate={handlePost}/> 
            }}/>

            <Route exact path="/pirates/:id/edit" render={(props) => {
              const id = props.match.params.id;
              const pirate = findPirateById(id);
              return <PirateForm pirate={pirate} ships={ships} onUpdate={handleUpdate}/>
            }}/>

            <Route exact path="/pirates/:id" render={(props => {
              const id = props.match.params.id;
              const pirate = findPirateById(id);
              return <PirateDetail pirate={pirate}/>
            })}/>

            <Route render={() => {
              return <PirateList pirates = {pirates}/>
            }}/>
          </Switch>
        </Fragment>
      </Router>
    )
};

export default PirateContainer;
