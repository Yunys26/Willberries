// Reducer counter принимающий начальное состояние и action то есть действие
export default function counter(state = 10, action) {
    switch (action.type) {
        case 'INCEREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default: 
            return state;
    }
}