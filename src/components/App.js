import React, { Component } from 'react';

import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';

import './App.css';

import { connect } from 'react-redux';
import { setSearchField, getData } from '../actions';

class App extends Component {
  // state = {
  //   robots: []
  // };

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="tc ">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

const mapState = state => {
  console.log(state);
  return {
    searchField: state.Robots.searchField,
    robots: state.GetRobots.robots
  };
};

const mapDispatch = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(getData())
  };
};

export default connect(
  mapState,
  mapDispatch
)(App);
