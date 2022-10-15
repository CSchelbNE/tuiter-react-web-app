import PostSummaryList from "./PostSummaryList/PostSummaryList.js";
import MainImageContent from "./MainImageContent.js";
import ExploreNavbar from "./ExploreNavbar.js";

const ExploreScreen = () => {
    return (`
           ${ExploreNavbar()}
           ${MainImageContent()} 
           ${PostSummaryList()}
    `);
}

export default ExploreScreen