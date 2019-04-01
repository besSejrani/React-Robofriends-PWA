import React, { Component } from 'react';

class searchBox extends Component {
  render() {
    return (
      <div className="pa4">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="text"
          placeholder="Search your favorite robot"
          onChange={this.props.searchChange}
        />
      </div>
    );
  }
}

export default searchBox;
