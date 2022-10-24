import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

const PostSummaryItem = ({post}) => {
    // const userName = post.userName !== ``
    //                  ? `<div class="fw-bolder me-1" style="color: white">${post.userName
    //                                                                        + " "}</div>` : ``;
    // const topic = post.topic !== `` ? `<div class="lighter-text">${post.topic + " "}</div>` : ``;
    console.log(post.image)
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
                    {post.title}
                </div>
            </div>
            <img src={`../images/${post.image}`} className="rounded-corners-all-around wd-sixty-five-px-img"/>
        </a>
    )
}

export default PostSummaryItem

