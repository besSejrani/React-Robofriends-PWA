import React, { Component } from 'react';

import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';

import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange } = this.props;

    return (
      <div className="tc ">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={this.filteredRobots()} />
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
