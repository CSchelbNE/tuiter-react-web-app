import { createSlice } from "@reduxjs/toolkit";
import tuits from "../tuits/tuits.json"

const currentUser = {
    "userName" : "NASA",
    "handle" : "@nasa",
    "userIcon" : "nasa.jpg"
}


const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState: tuits,
                                   reducers: {
                                       deleteTuit(state, action) {
                                           const index = state
                                               .findIndex(tuit =>
                                                              tuit._id === action.payload);
                                           console.log(index)
                                           state.splice(index, 1);
                                       },
                                       createTuit(state, action) {
                                           state.unshift({
                                                             ...action.payload,
                                                             ...templateTuit,
                                                             _id: (new Date()).getTime(),
                                                         })
                                       }
                                   }
                               });


export const {createTuit, deleteTuit, increment,decrement} = tuitsSlice.actions;
export default tuitsSlice.reducer;