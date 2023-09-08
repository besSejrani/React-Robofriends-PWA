import { createSelector } from "reselect";

const selectRobotsReducer = (state) => state.robots;

const selectRobots = createSelector([selectRobotsReducer], (select) => select.robots);
const selectSearch = createSelector([selectRobotsReducer], (select) => select.search);

export const selectFilterRobots = createSelector([selectRobots, selectSearch], (robots: any[], search: string) =>
  robots.filter((robot: any) => robot.name.toLowerCase().includes(search.toLowerCase()))
);
