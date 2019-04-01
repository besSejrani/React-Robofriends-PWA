import React from 'react';

const searchBox = props => {
  console.log(props);
  return (
    <div className="pa4">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder="Search your favorite robot"
        onChange={props.searchChange}
      />
    </div>
  );
};

export default searchBox;
