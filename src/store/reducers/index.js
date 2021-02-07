import { combineReducers } from "redux";
import counter from './counter';
// Один общий редьюсер для всех редьюсеров
export default combineReducers({
    counter: counter,
});