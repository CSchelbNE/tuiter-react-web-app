import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";

/* eslint-env jquery */
function exploreComponent() {
    $('#wd-explore').append(`
       <div class="row mt-2">
           <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
           </div>
            <div class="col-10 col-lg-7 col-xl-6">
                ${ExploreComponent()}
           </div>
            <div class="col-lg-4 col-xl-3 ps-2 pe-0 d-none d-lg-block">
                ${WhoToFollowList()}
           </div>
      </div>
   `);
}

$(exploreComponent);