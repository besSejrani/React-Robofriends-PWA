import React, { Component } from 'react';
import MainPage from './MainPage';

import { connect } from 'react-redux';
import { setSearchField, getData } from '../actions';

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

const mapState = state => {
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
