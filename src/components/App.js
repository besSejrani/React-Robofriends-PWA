import React, { Component } from 'react';

import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';

import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    robots: [],
    searchfield: ''
  };

  componentDidMount = async () => {
    const req = await axios.get('https://jsonplaceholder.typicode.com/users');

    console.log(req.data);

    this.setState({ robots: req.data });
  };

  onSearchChange = e => {
    this.setState({
      searchfield: e.target.value
    });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc ">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
