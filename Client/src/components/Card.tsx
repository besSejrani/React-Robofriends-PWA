import React, { FunctionComponent } from "react";
import "tachyons";

type CardProps = {
  email: string;
  name: string;
  id: number;
};

const Card: FunctionComponent<CardProps> = ({ email, name, id }) => {
  const url = `https://robohash.org/${id}?size=200x200`;

  return (
    <div className="bg-light-green dib br3 pa3  ma2 grow bw2 shadow-5">
      <img src={url} alt="robots" />
      <div>
        <h2 style={styles.title}>{name}</h2>
        <p style={styles.email}>{email}</p>
      </div>
    </div>
  );
};

const styles = {
  title: {
    color: "white",
  },
  email: {
    color: "white",
  },
};

export default Card;
