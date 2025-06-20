import { Chat, Notifications, Person, Search } from "@mui/icons-material"
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="Logo">Social-Eyes</span>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <Search className="searchIcon"/>
            <input placeholder="Search for friends, posts or video" className="searchInput"></input>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">3</span>
            </div>
          </div>
          <img src="/assets/person/1.jpg" alt="" className="topbarImage" />
        </div>
    </div>
  )
}