import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

type MaterialCard = {
  name: string;
  id: number;
};

const MaterialCard: React.FC<MaterialCard> = ({ name, id }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={classes.cardImage}
          component="img"
          alt="Robo hash api"
          height="250"
          image={`https://robohash.org/${id}?size=250x250`}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center" }}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MaterialCard;

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "10px 10px",
  },
  cardImage: {
    height: "auto",
  },
});
