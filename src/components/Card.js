import React from 'react';
import 'tachyons';

const Card = ({ email, name, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3  ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <div>
        <h2 style={styles.title}>{name}</h2>
        <p style={styles.email}>{email}</p>
      </div>
    </div>
  );
};

const styles = {
  title: {
    color: 'white'
  },
  email: {
    color: 'white'
  }
};

export default Card;
