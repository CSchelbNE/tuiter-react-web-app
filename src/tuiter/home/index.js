import React from "react";
import posts from "./posts";
import PostListItem from "./post-list-item";

const HomeComponent = () => {
    return (
        <div className="list-group">
            {posts.map(post => <PostListItem post={post}/>)}
        </div>
    )
}

export default HomeComponent