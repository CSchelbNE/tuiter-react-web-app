import mongoose from "mongoose";

const tuitsSchema = mongoose.Schema({
    tuit: String,
    topic: String,
    userName: String,
    userIcon: String,
    handle: String,
    title: String,
    retuits: Number,
    replies: Number,
    dislikes: Number,
    disliked: Boolean,
    likes: Number,
    liked: Boolean,
                    }, {collection: "tuits"});

export default tuitsSchema;