import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Paper } from "@material-ui/core";

type MaterialCard = {
  name: string;
  email: string;
  id: number;
};

const MaterialCard: React.FC<MaterialCard> = ({ name, email, id }) => {
  const classes = useStyles();

  return (
    /*     <Paper variant="outlined"> */
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Robo hash api"
          height="250"
          image={`https://robohash.org/${id}?size=250x250`}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    /*  </Paper> */
  );
};

export default MaterialCard;

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "10px 10px",
  },
});
