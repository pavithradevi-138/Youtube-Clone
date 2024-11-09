import './PlayVideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video} controls autoPlay muted></video>
      <h3>Best Youtube Channel to learn Web development.</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt="like" />125</span>
          <span><img src={dislike} alt="dislike" />2</span>
          <span><img src={share} alt="share" />Share</span>
          <span><img src={save} alt="save" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy.</p>
        <p>Subscribe GreatStack to watch more tutorials on web development.</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="user profile" />
          <div>
            <h3>Jack Nicholson <span>1 Day ago</span> </h3>
            <p>A global computer network providing a variety of information for web development.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="user profile" />
          <div>
            <h3>Jack Nicholson <span>1 Day ago</span> </h3>
            <p>A global computer network providing a variety of information for web development.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
              <span>3</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="user profile" />
          <div>
            <h3>Jack Nicholson <span>1 Day ago</span> </h3>
            <p>A global computer network providing a variety of information for web development.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo