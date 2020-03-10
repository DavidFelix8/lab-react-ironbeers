import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Link to={'/beers'}>
            <img src="/images/beers.png" alt="beer" />
            <h2>All Beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda ratione
              aspernatur dolores eum! Ex quam eius fugit cupiditate! Eaque minus ducimus saepe
              numquam doloremque quos totam corporis repellat deleniti?
            </p>
          </Link>
          <Link to={'/random-beer'}>
            <img src="/images/random-beer.png" alt="random-beer" />
            <h2>Random Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda ratione
              aspernatur dolores eum! Ex quam eius fugit cupiditate! Eaque minus ducimus saepe
              numquam doloremque quos totam corporis repellat deleniti?
            </p>
          </Link>
          <Link to={'/new-beer'}>
            <img src="/images/new-beer.png" alt="new-beer" />
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda ratione
              aspernatur dolores eum! Ex quam eius fugit cupiditate! Eaque minus ducimus saepe
              numquam doloremque quos totam corporis repellat deleniti?
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
