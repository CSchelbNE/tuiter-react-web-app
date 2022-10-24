import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavigationSidebarItem = ({tab}) => {
    return (
        <div>
            <a href={tab.href} className={`list-group-item ${tab.isActive === true ? 'active' : ''}
            d-flex flex-row align-items-center wd-grid-item-a-tag`}>
                <FontAwesomeIcon icon={tab.icon} className="me-1 ps-0 p-1" />
                <div className="d-none d-xl-block smaller-font">{tab.name}</div>
            </a>
        </div>
    )
}

export default NavigationSidebarItem;
