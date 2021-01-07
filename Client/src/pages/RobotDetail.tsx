import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IAppState } from "../redux/rootReducer";

import { useDispatch, useSelector } from "react-redux";
import { getRobot } from "../redux/robots/robotActions";
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import FingerPrintIcon from "@material-ui/icons/Fingerprint";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import WebsiteIcon from "@material-ui/icons/Public";

const RobotDetail: React.FC<any> = () => {
  const { id } = useParams<{ id: string }>();
  const classes = useStyles();

  const dispatch = useDispatch();
  const robot = useSelector((state: IAppState) => state.robots.robot);

  const theme = useTheme();

  useEffect(() => {
    const fetchData = async (id: string) => {
      await dispatch(getRobot(id));
    };

    fetchData(id);
  }, []);

  return (
    <Container className={classes.container}>
      <Card className={classes.group} elevation={3}>
        <Card elevation={3}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Robo hash api"
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
      </Card>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "5% 0% 15% 0%",
    },
  },
  group: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
    },
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default RobotDetail;
