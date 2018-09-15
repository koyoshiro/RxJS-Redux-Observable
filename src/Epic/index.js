import { combineEpics } from "redux-observable";
import { requestEpic } from "./requestEpic";

const rootEpic = combineEpics(
    requestEpic
);

export default rootEpic;