import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const NavigationSidebarItem = ({tab}) => {
    return (
        <div>
            <Link to={tab.href} className={`list-group-item ${tab.isActive === true ? 'active' : ''}
            d-flex flex-row align-items-center wd-grid-item-a-tag`}>
                <FontAwesomeIcon icon={tab.icon} className="me-1 ps-0 p-1" />
                <div className="d-none d-xl-block smaller-font">{tab.name}</div>
            </Link>
        </div>
    )
}

export default NavigationSidebarItem;
