const ExploreNavbar = () => {
    return (`
        <div class="row mb-2 d-flex flex-row align-items-center">
            <div class="d-flex align-items-center position-relative col-11">
                <input placeholder="Search Tuiter" type="search" class="form-control flex-grow-1">
                <i class="wd-search-icon fa fa-search"></i>
            </div>
            <div class="col-1 d-none d-sm-block pe-sm-2">
                <a href="#">
                    <i class="fa fa-thin fa-gear col-1 ps-0" style="font-size: 1.5em"></i>
                </a>
            </div>
         </div>
         <div class="row">
                    <div class="col-12">
                        <ul class="nav nav-tabs mb-2" style="font-size: 16px;">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">For you</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Trending</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sports</a>
                            </li>
                            <li class="nav-item d-none d-sm-none d-md-block">
                                <a class="nav-link" href="#">Entertainment</a>
                            </li>
                        </ul>
                    </div>
                </div>
    `);
}

export default ExploreNavbar