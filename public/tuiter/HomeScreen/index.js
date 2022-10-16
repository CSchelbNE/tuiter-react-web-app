import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../ExploreScreen/PostSummaryList/PostSummaryList.js";
import PostList from "../PostList/PostList.js";

/* eslint-env jquery */
function HomeComponent() {
    $('#wd-home').append(`
       <div class="row mt-2 mb-2">
           <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
           </div>
            <div class="col-10 col-lg-7 col-xl-6">
                ${PostList()}
           </div>
            <div class="col-lg-4 col-xl-3 ps-2 pe-0 d-none d-lg-block">
                ${PostSummaryList()}
           </div>
      </div>
   `);
}

$(HomeComponent());
