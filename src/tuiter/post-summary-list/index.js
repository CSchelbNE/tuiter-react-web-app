import posts from "./posts";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = (position) => {
    return (
        <div className="list-group">
            {posts.map(post => <PostSummaryItem key={post._id} post={post}/>)}
        </div>
    );
}

export default PostSummaryList