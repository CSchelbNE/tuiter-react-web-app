import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";


const PostSummaryList = (position) => {
    const hasMargins = position === "mt-2" ? "mt-2" : "";
    return (`
        <div class="list-group ${hasMargins}">
            ${posts.map(post => PostSummaryItem(post)).join("")}
        </div>
    `);
}


export default PostSummaryList