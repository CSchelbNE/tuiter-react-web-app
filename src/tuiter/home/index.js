import React from "react";
import posts from "./posts";
import PostListItem from "./post-list-item";
import {v4 as uuidv4} from 'uuid';

const HomeComponent = () => {
    return (
        <div className="list-group">
            {posts.map(post => <PostListItem key={uuidv4()} post={post}/>)}
        </div>
    )
}

export default HomeComponent