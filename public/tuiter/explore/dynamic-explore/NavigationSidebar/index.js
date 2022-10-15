const NavigationSidebar = () => {
    return(`
            <div class="list-group m-0">
                    <div class="list-group-item">
                        <i class="fab fa-twitter fa-1x"></i>
                    </div>
                    <a href="../../home.html" class="list-group-item d-flex flex-row align-items-center">
                        <i class="fa-solid fa-house me-1 ps-0 p-1"></i>
                        <div class="d-none d-xl-block smaller-font">Home</div>
                    </a>
                    <a href="index.html" class="list-group-item active d-flex flex-row align-items-center">
                        <i class="fa fa-hashtag me-1 ps-0 p-1"></i>
                        <div class="d-none d-xl-block smaller-font">Explore</div>
                    </a>
                    <a href="../../temp/notifications.html" class="list-group-item d-flex flex-row align-items-center">
                        <i class="fa fa-bell me-1 ps-0 p-1"></i>
                        <span class="d-none end-100 d-xl-block smaller-font">Notifications</span>
                    </a>
                    <a href="../../temp/messages.html" class="list-group-item d-flex flex-row align-items-center">
                        <i class="fa fa-envelope me-1 ps-0 p-1"></i>
                        <span class="d-none d-xl-block smaller-font">Messages</span>
                    </a>
                    <a href="../../bookmarks/index.html" class="list-group-item d-flex flex-row align-items-center">
                        <i class="fa fa-bookmark me-1 ps-0 p-1"></i>
                        <span class="d-none d-xl-block smaller-font">Bookmarks</span>
                    </a>
                    <a href="../../temp/lists.html" class="list-group-item d-flex flex-row align-items-center">
                        <i class="fa fa-list me-1 ps-0 p-1"></i>
                        <span class="d-none d-xl-block smaller-font">Lists</span>
                    </a>
                    <a href="../../profile.html" class="list-group-item d-flex flex-row align-items-center">
                        <i class="fa fa-user me-1 ps-0 p-1"></i>
                        <span class="d-none d-xl-block smaller-font">Profile</span>
                    </a>
                    <a href="#" class="list-group-item d-flex flex-row align-items-center">
<!--                        <i class="fa fa-circle me-1 ps-0 p-1"></i>-->
                        <i class="fa fa-circle me-1 ps-0 p-1"></i>
                        <span class="d-none d-xl-block smaller-font">More</span>
                    </a>
                </div>
                <div class="d-flex p-1">
                    <button id="tuit-button" class="mt-2 btn btn-primary flex-grow-1 rounded-pill">Tuit</button>
                </div>
 `);
}
export default NavigationSidebar;