import ExploreNavbar from "./explore-navbar";
import PostSummaryList from "../post-summary-list";
const ExploreComponent = () => {
    return (
            <div>
                <ExploreNavbar/>
               <a href="#">
                <div className="mb-2 row position-relative">
                    <img src="../images/starship.webp"/>
                    <div className="ms-2 mb-2 position-absolute start-0 bottom-0
                    wd-explore-image-text">Space X's Starship</div>
                </div>
                </a>
                <PostSummaryList/>
            </div>
    );
}

export default ExploreComponent