import {
    faBell,
    faBookmark, faCircle,
    faEnvelope,
    faHashtag,
    faHouse, faList, faUser
} from "@fortawesome/free-solid-svg-icons";

export default  [ {
    href : "../HomeScreen/index.html",
    name : "Home",
    icon : faHouse
},
{
    href : "../ExploreScreen/index.html",
        name : "Explore",
    icon : faHashtag
},
{
    href : "#",
        name : "Notifications",
    icon : faBell
},
{
    href : "#",
        name : "Messages",
    icon : faEnvelope
},
{
    href : "../bookmarks/index.html",
        name : "Bookmarks",
    icon : faBookmark
},
{
    href: "#",
        name: "Lists",
    icon: faList
},
{
    href: "../profile.html",
        name: "Profile",
    icon: faUser
},
{
    href: "#",
        name: "More",
    icon: faCircle
}

]