import NavItemsJSON from "./NavItemsJSON.js";
import NavigationItem from "./NavigationItem.js"

const NavigationSidebar = (active) => {
    console.log(active);
    return(`
            <div class="list-group">
                    <div class="list-group-item">
                        <i class="fab fa-twitter fa-1x"></i>
                    </div>
                    ${NavItemsJSON.map(item => active === item.name ?
                                               NavigationItem(item, "active") : NavigationItem(item,"")).join("")}
                </div>
                <div class="d-flex p-1">
                    <button id="tuit-button" class="mt-2 btn btn-primary flex-grow-1 rounded-pill">Tuit</button>
                </div>
 `);
}
export default NavigationSidebar;