import {
    faBell,
    faBookmark, faCircle,
    faEnvelope,
    faHashtag,
    faHouse, faList, faUser, faFlask
} from "@fortawesome/free-solid-svg-icons";

export default  [ {
    href : "/tuiter/home",
    name : "Home",
    icon : faHouse
},
{
    href : "/tuiter/explore",
        name : "Explore",
    icon : faHashtag
},{
    href: "/",
    name: "Labs",
    icon: faFlask
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
    href : "#",
        name : "Bookmarks",
    icon : faBookmark
},
{
    href: "#",
        name: "Lists",
    icon: faList
},
{
    href: "/tuiter/profile",
        name: "Profile",
    icon: faUser
},
{
    href: "#",
        name: "More",
    icon: faCircle
}

]