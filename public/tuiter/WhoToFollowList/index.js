import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
                    <li class="list-group-item wd-who-to-follow">
                        <b><p class="m-0" style="font-size: 14px">Who to follow</p></b>
                    </li>
                    ${who.map(whoItem => WhoToFollowListItem(whoItem)).join("")}
        </ul>
   `);
}

export default WhoToFollowList