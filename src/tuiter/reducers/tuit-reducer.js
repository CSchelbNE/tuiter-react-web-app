import { createSlice } from "@reduxjs/toolkit";
import tuits from "../tuits/tuits.json"
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const currentUser = {
    "userName" : "NASA",
    "handle" : "@nasa",
    "userIcon" : "nasa.jpg"
}


export const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "Now",
    "liked": false,
    "disliked" : false,
    "dislikes": 0,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
                                   name: 'tuits',
                                    initialState,
                                   extraReducers: {
                                       [findTuitsThunk.pending]:
                                           (state) => {
                                               state.loading = true
                                               state.tuits = []
                                           },
                                       [findTuitsThunk.fulfilled]:
                                           (state, { payload }) => {
                                                console.log(payload)
                                               console.log(state)
                                               state.loading = false
                                               state.tuits = payload
                                           },
                                       [findTuitsThunk.rejected]:
                                           (state) => {
                                               state.loading = false
                                           },
                                       [deleteTuitThunk.fulfilled]:
                                           (state, {payload}) => {
                                                state.loading = false;
                                                state.tuits = state.tuits.filter(t => t._id !== payload);
                                           },
                                       [createTuitThunk.fulfilled]:
                                           (state, {payload}) => {
                                           state.loading = false;
                                           state.tuits.push(payload)
                                           },
                                       [updateTuitThunk.fulfilled]:
                                           (state, { payload }) => {
                                                console.log(payload);
                                               const index = state.tuits.findIndex((t) =>
                                               t._id === payload.data._id);
                                               const leftSlice = state.tuits.slice(0,index);
                                               const rightSlice = state.tuits.slice(index+1);
                                               state.tuits = [...leftSlice,payload.data, ...rightSlice];
                                               // const tuitNdx = state.tuits
                                               //     .findIndex((t) => t._id === payload.data._id)
                                               // state.tuits[tuitNdx] = {
                                               //     ...state.tuits[tuitNdx],
                                               //     ...payload.data
                                           }
                                   },

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