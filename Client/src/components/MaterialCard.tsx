import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

type MaterialCard = {
  name: string;
  id: number;
};

const MaterialCard: React.FC<MaterialCard> = ({ name, id }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        {name && id ? (
          <CardMedia
            className={classes.cardImage}
            component="img"
            alt="Robo hash api"
            height="250"
            image={`https://robohash.org/${id}?size=250x250`}
            title={name}
          />
        ) : (
          <Skeleton variant="rect" width={300} height={300} />
        )}
        <CardContent>
          {name ? (
            <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center" }}>
              {name}
            </Typography>
          ) : (
            <Skeleton variant="rect" width={268} height={32} />
          )}
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
