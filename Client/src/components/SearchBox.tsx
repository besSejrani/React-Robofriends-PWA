import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { searchField } from "../redux/actions";

const searchBox: FunctionComponent<any> = ({ searchField }) => {
  return (
    <div className="pa4">
      <input
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder="Search your favorite robot"
        onChange={(e) => searchField(e.target.value)}
      />
    </div>
  );
};

export default connect(null, { searchField })(searchBox);
