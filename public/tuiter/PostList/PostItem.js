/* eslint-env jquery */

const PostItem = (post) => {
    const contentTitle = post.contentTitle !== undefined ? post.contentTitle : "";
    const contentBody = post.contentBody !== undefined ? post.contentBody : "";
    const link = post.link !== undefined ? post.link : "";
    const postContentDiv = contentTitle !== "" && contentBody !== "" ?
                           `<a class="wd-post-content pt-2 pb-2 ps-3 pe-3 fourteen-px-font wd-central-content-desc col-12"
                                style="text-decoration: none" href="#">
                                <div class="text-white mb-1">${contentTitle}</div>
                                <div class="lighter-text">${contentBody}</div>
                                <div class="d-flex flex-row align-items-center">
                                    <i id="link" class="fa fa-chain lighter-text me-1"></i>
                                    <div class="lighter-text">${link}</div>
                                </div>
                            </a>` : "";
    return (`
            <div>
                <div class="pt-2 d-flex flex-row justify-content-between row" style="border: 1px solid rgb(34,34,34);">
                    <div class="d-flex flex-row">
                        <img class="rounded-corners-all-around rounded-circle pe-2" src=${"../../images/"+ post.userIcon}>
                        <div class="d-flex flex-column" style="color: white">
                            <div class="d-flex fourteen-px-font flex-row align-items-center">
                                <a href="#" class="d-flex flex-row align-items-center" style="text-decoration: none">
                                    <div class="text-white">${post.userName}</div>
                                    <i class="ms-1 pe-1 smaller-font text-white fa-solid fa-circle-check"></i>
                                    <div class="lighter-text">${"@"+post.handle}</div>
                                </a>
                            </div> 
                            <div class="fourteen-px-font">
                                ${post.userPost}
                            </div>
                            <a href="#">
                                <img src=${"../../images/"+post.image} class="mt-2 col-12 wd-central-content-img">
                            </a>
                            ${postContentDiv}
                             <div class="wd-footer-icons p-2 d-flex flex-row justify-content-between">
                                <div>
                                    <a class="d-flex flex-row align-items-center" href="#" style="text-decoration: none">
                                        <i class="fa fa-comment-o me-2"></i>
                                        <div class="fourteen-px-font">${post.comments}</div>
                                    </a>
                                </div>
                                <div>
                                    <a class="d-flex flex-row align-items-center" href="#" style="text-decoration: none">
                                        <i class="fa fa-refresh me-2"></i>
                                         <div class="fourteen-px-font">${post.retuits}</div>
                                    </a>
                                </div>
                                <div>
                                    <a class="d-flex flex-row align-items-center" href="#" style="text-decoration: none">
                                        <i id="heart" class="fa fa-heart me-2"></i>
                                         <div class="fourteen-px-font">${post.hearts}</div>
                                    </a>
                                </div>
                                <div>
                                    <a class="d-flex flex-row align-items-center" href="#" style="text-decoration: none">
                                        <i class="fa fa-share-square me-2"></i>
                                    </a>
                                </div>
                            </div>
                                    </div>
                                    <a href="#" style="text-decoration: none">
                                        <i class="mt-2 fa fa-ellipsis-h text-white"></i>
                                    </a>
                                </div>
                            </div>
                    </div>
   `);
}

export default PostItem