import { combineReducers } from 'redux';
import RobotReducer from './robotReducer';
import GetRobotsReducer from './getRobotsReducer';

export default combineReducers({
  Robots: RobotReducer,
  GetRobots: GetRobotsReducer
});
