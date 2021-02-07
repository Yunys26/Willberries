import { DECREMENT } from "../actions";

export default function actionDecrement (value) {
    return {
        type: DECREMENT,
        payload: value,
    }
}