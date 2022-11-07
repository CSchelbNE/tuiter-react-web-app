import { createSlice } from "@reduxjs/toolkit";

const defaultUser = {
    "firstName": "Christopher",
    "lastName": "Schelb",
    "handle": "@cschelb",
    "profilePicture": "athf.PNG",
    "bannerPicture": "red.PNG",
    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut leo turpis, mattis eget porta ac, venenatis et enims augue, viverra tempor sapien.",
    "website" : "youtube.com/dogsbody",
    "location": "Boston, MA",
    "dob" : '1982-08-02',
    "dateJoined" : "4/2008",
    "followingCount": 380,
    "followersCount": 290,
    "tuitCount": 2121
}

const profileSlice = createSlice({
    name: "profile",
    initialState: defaultUser,
    reducers : {
        editProfile(state,action){
            const newState = {...state, ...action.payload}
            return newState;
        }
    }
});

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;