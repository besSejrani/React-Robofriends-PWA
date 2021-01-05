import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IAppState } from "../redux/reducers";

import { connect } from "react-redux";
import { getRobot } from "../redux/actions/index";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

import { theme } from "../Layout/Theme";
import PersonIcon from "@material-ui/icons/Person";
import FingerPrintIcon from "@material-ui/icons/Fingerprint";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import WebsiteIcon from "@material-ui/icons/Public";

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
    <Container className={classes.container}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Robo hash api"
            height="250"
            image={`https://robohash.org/${robot.id}?size=250x250`}
            title={robot.name}
          />
        </CardActionArea>
      </Card>

      <List className={classes.list}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Name" secondary={robot.name} />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FingerPrintIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Username" secondary={robot.username} />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email" secondary={robot.email} />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Phone" secondary={robot.phone} />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WebsiteIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Website" secondary={robot.website} />
        </ListItem>
      </List>
    </Container>
  );
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100vh",
  },
  root: {
    width: 300,
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const mapState = (state: IAppState) => {
  return {
    robot: state.robots.robot,
  };
};

export default connect(mapState, { getRobot })(RobotDetail);
