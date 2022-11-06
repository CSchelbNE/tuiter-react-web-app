import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";


const PostSummaryList = (position) => {
    const tuits = useSelector((state) => state.tuits)
    return (
        <div className="list-group">
            {tuits.map(post => <PostSummaryItem key={post._id} post={post}/>)}
        </div>
    );
}

export default PostSummaryList