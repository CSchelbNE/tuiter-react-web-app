import PostSummaryItem from "./post-summary-item";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {useEffect} from "react";
import {findTuitsThunk} from "../../services/tuits-thunks";


const PostSummaryList = (position) => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData
    )
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return (
        <div className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {tuits.map(post => <PostSummaryItem key={post._id} post={post}/>)}
        </div>
    );
}

export default PostSummaryList