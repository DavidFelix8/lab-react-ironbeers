import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomePageView from './views/home';
import BeersView from './views/beers';
import NewBeerView from './views/new-beer';
import RandomBeerView from './views/random-beer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <HomePageView />
          <Switch>
            <Route path="/beers" component={BeersView} />
            <Route path="/random-beer" component={RandomBeerView} />
            <Route path="/new-beer" component={NewBeerView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
