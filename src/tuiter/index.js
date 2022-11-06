import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import tuitReducer from "./reducers/tuit-reducer";
import HomeComponent from "./home";

const store = configureStore({
     reducer: {who: whoReducer, tuits: tuitReducer}
});

function Tuiter() {
    return(
        <div>
            <Provider store={store}>
                <div className="row mt-4 mb-4">
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
            </Provider>
        </div>
    );
}
export default Tuiter