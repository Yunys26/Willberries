import { INCEREMENT } from "../actions";

export default function actionIncrment (value) {
    return {
        type: INCEREMENT,
        payload: value,
    }
}