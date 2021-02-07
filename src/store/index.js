import { createStore } from "redux";
import rootReducer from './reducers';

const store = createStore(rootReducer);

store.subscribe(() => console.info(store.getState()))

export default store;