import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({post}) {

    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={post.photo} alt=""/>
                    <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.jpg" alt="" onClick={likeHandler} className="likeIcon" />
                    <img src="/assets/heart.jpg" alt="" onClick={likeHandler} className="likeIcon" />
                    <span className="postLikeCounter">{like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">{post.comment} comments</div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
