import { createSelector } from "reselect";

const selectRobotsReducer = (state) => state.robots;

const selectRobots = createSelector([selectRobotsReducer], (select) => select.robots);
const selectSearch = createSelector([selectRobotsReducer], (select) => select.search);

export const selectFilterRobots = createSelector([selectRobots, selectSearch], (robots, search) =>
  robots.filter((robot: any) => robot.name.includes(search))
);
