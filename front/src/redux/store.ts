import {createStore} from "redux";

// const thunkMiddleware = (store) => (next) => (action) => {
//     if (typeof action === 'function') { // 비동기
//         return action(store.dispatch, store.getState);
//     }
//     return next(action); // 동기
// };
