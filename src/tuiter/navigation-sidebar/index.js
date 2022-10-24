import React from "react";
import NavigationSidebarItem from "./navigation-sidebar-item.js";
import {v4 as uuidv4} from 'uuid';
import navItemsJSON from "./NavItemsJSON";


const NavigationSidebar = (active) => {
    return (
        <div className="list-group">
            <a className="p-2 list-group-item">
                Tuiter
            </a>
            {navItemsJSON.map(navItem => <NavigationSidebarItem
                key={uuidv4()} tab={{isActive: active.active.toUpperCase() === navItem.name.toUpperCase(),
                href: navItem.href, name: navItem.name, icon: navItem.icon}}/>)}
        </div>
    );
}

export default NavigationSidebar;