import "./profile.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img src="assets/person/2.jpg" alt="" className="profileCoverImg" />
                <img src="assets/person/1.jpg" alt="" className="profileUserImg" /> 
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Hengul Raj Saikia</h4>
                <span className="profileInfoDesc">Hello my friends</span>
            </div>
        </div>
        <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
        </div>    
      </div>
    </div>
  </>
  )
}
