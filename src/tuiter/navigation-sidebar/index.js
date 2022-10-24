import React from "react";
import NavigationSidebarItem from "./navigation-sidebar-item.js";
import {v4 as uuidv4} from 'uuid';
import navItemsJSON from "./NavItemsJSON";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="p-2 list-group-item">
                Tuiter
            </a>
            {navItemsJSON.map(navItem => <NavigationSidebarItem
                key={uuidv4()} tab={{isActive: active.toUpperCase() === navItem.name.toUpperCase(),
                href: navItem.href, name: navItem.name, icon: navItem.icon}}/>)}
        </div>
    );
}

export default NavigationSidebar;