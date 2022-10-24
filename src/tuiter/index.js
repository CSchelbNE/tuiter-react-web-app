import Nav from "../Nav.js"
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore/explore-component";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";

function Tuiter() {
    return(
        <div>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6 ps-0 pe-1">
                    <Routes>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="home" element={<HomeComponent/>}/>
                    </Routes>
                </div>
                <div className="col-lg-4 col-xl-3 ps-2 pe-0 d-none d-lg-block">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    );
}
export default Tuiter