const PostSummaryItem = (post) => {
    const userName = post.userName !== `` ? `<div class="fw-bolder me-1" style="color: white">${post.userName + " "}</div>`: ``;
    const topic = post.topic !== `` ? `<div class="lighter-text">${post.topic + " "}</div>`: ``;
    if (post.tweets === undefined) {
        return (`
         <a href="#" class="wd-grid-item-a-tag fourteen-px-font list-group-item d-flex flex-row
                justify-content-between middle-column-border-bottom">
            <div class="d-flex flex-column">
                ${topic}
                <div class="d-flex flex-row align-items-center">
                    ${userName}
                    <i class="ms-1 pe-1 smaller-font fa-solid fa-circle-check"></i>
                    <div class="lighter-text"> ${"- " + post.time}</div>
                </div>
                <div class="fw-bold">
                    ${post.title}
                </div>
            </div>
           <img src=${"../../../../images/"+ post.image} style="height: 75px; max-width: 75px"
                 class="img-fluid rounded-corners-all-around">
        </a>
        `)
    } else {
        return (`
           <a href="#" class="wd-grid-item-a-tag fourteen-px-font list-group-item 
                    d-flex flex-row justify-content-between">
            <div class="d-flex flex-column">
                    ${topic}
                <div class="d-flex flex-row align-items-center">
                    ${userName}
                    <i class="${post.userName ===`` ? `ms-0` : `ms-1`} smaller-font fa-solid fa-circle-check"></i>
                    <div class="ps-1 lighter-text">${"- " + post.time}</div>
                </div>
                <div class="fw-bold">
                    ${post.title}
                </div>
                <div class="lighter-text">
                    ${post.tweets + " Tuits"}
                </div>
            </div>
            <img  src=${"../../../../images/"+ post.image} style="height: 75px; max-width: 75px"
                 class="rounded-corners-all-around img-fluid">
        </a>
        `);
    }
}

export default PostSummaryItem