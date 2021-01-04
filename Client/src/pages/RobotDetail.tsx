import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IAppState } from "../redux/reducers";

import { connect } from "react-redux";
import { getRobot } from "../redux/actions/index";
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography, Container } from "@material-ui/core";

const RobotDetail: React.FC<any> = ({ getRobot, robot }) => {
  const { id } = useParams<{ id: string }>();
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async (id: string) => {
      await getRobot(id);
    };

    fetchData(id);
  }, []);

  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Robo hash api"
            height="250"
            image={`https://robohash.org/${robot.id}?size=250x250`}
            title={robot.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {robot.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {robot.email}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {robot.username}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {robot.phone}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {robot.website}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "25% 0% 10% 0%",
  },
});

const mapState = (state: IAppState) => {
  return {
    robot: state.robots.robot,
  };
};

export default connect(mapState, { getRobot })(RobotDetail);
