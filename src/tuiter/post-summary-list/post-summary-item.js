import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

const PostSummaryItem = ({post}) => {
    return (
        <a href="#" className="wd-grid-item-a-tag fourteen-px-font list-group-item d-flex flex-row
                justify-content-between middle-column-border-bottom">
            <div className="d-flex flex-column me-4">
                <div className="d-flex flex-row align-items-center">
                    {post.userName}
                    <FontAwesomeIcon icon={faCircleCheck} className="ms-1 pe-1 fourteen-px-font"/>
                    <div className="lighter-text">{"- " + post.time}</div>
                </div>
                <div className="fw-bold">
                    {post.topic}
                </div>
                <div>
                    {post.tuit}
                </div>
            </div>
            <img src={`../images/${post.userIcon}`} className="rounded-corners-all-around wd-sixty-five-px-img"/>
        </a>
    )
}

export default PostSummaryItem

