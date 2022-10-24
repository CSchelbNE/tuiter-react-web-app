import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
    from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
                    <li className="list-group-item wd-who-to-follow">
                        <b><p className="m-0">Who to follow</p></b>
                    </li>
                    {whoArray.map(whoItem => <WhoToFollowListItem key={whoItem._id} who={whoItem}/>)}
        </ul>
   );
}


export default WhoToFollowList;