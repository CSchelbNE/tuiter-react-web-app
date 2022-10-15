const WhoToFollowListItem = (who) => {
    return (`
          <li class="list-group-item p-1 ps-2">
                        <div class="row">
                            <div class="col-2">
                                <img src=${"../../../../images/"+who.avatarIcon} class="rounded-circle position-relative start-40">
                            </div>
                            <div class="col-6">
                                <div class="row">
                                    <div class="d-flex flex-row align-items-center">
                                        <span style="font-size: 13px; font-weight: bold">${who.userName}</span>
                                        <i class="ps-1 smaller-font fa-sharp fa-solid fa-circle-check"></i>
                                    </div>
                                </div>
                                <div class="row p-0">
                                    <div class="wd-at-symbol-style">${"@"+who.Handle}</div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-xl-4 p-0 d-flex align-items-center justify-content-center">
                                <button class="mt-1 mb-1 btn btn-primary smaller-font rounded-pill">Follow</button>
                            </div>
                        </div>
                </li>
   `);
}

export default WhoToFollowListItem;