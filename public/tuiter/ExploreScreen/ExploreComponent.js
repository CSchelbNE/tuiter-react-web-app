import PostSummaryList from "../PostSummaryList/index.js";
import ExploreNavbar from "./ExploreNavbar.js";

const ExploreComponent = () => {
    return (`
           ${ExploreNavbar()}
           <a href="#">
            <div class="row position-relative">
                <img src="../../images/starship.webp">
                <div class="ms-2 mb-2 position-absolute start-0 bottom-0" style="font-size:
                                                                             32px; font-weight: bold; color: black; z-index: 1">Space X's Starship</div>
            </div>
            </a>
           ${PostSummaryList("mt-2")}
    `);
}

export default ExploreComponent