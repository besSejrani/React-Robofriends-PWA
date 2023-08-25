import React from "react";

// Material UI
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// Material Lab
import { Skeleton } from "@mui/lab";

// Material Styles
import { makeStyles } from "@mui/styles";

// ======================================================================================

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
        ) : // <Skeleton variant="rect" width={300} height={300} />
        null}
        <CardContent>
          {name ? (
            <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center" }}>
              {name}
            </Typography>
          ) : // <Skeleton variant="rect" width={268} height={32} />
          null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MaterialCard;

// ======================================================================================

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "10px 10px",
  },
  cardImage: {
    height: "auto",
  },
});
