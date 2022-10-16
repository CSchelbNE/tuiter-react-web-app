import PostSummaryList from "./PostSummaryList/PostSummaryList.js";
import MainImageContent from "./MainImageContent.js";
import ExploreNavbar from "./ExploreNavbar.js";

const ExploreComponent = () => {
    return (`
           ${ExploreNavbar()}
           ${MainImageContent()} 
           ${PostSummaryList("mt-2")}
    `);
}

export default ExploreComponent