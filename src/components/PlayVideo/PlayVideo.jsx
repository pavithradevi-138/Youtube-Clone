import './PlayVideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import { useEffect, useState } from 'react'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const PlayVideo = () => {

  const { videoId } = useParams()
  const [apiData, setApiData] = useState(null)
  const [channelApiData, setChannelApiData] = useState(null)
  const [commentData, setCommentData] = useState([])

  const video_Data = async () => {
    const video_Details_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(video_Details_Url)
      .then(res => res.json())
      .then(data => setApiData(data.items[0]))
  }
  const channel_Data = async () => {
    const channel_Details_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channel_Details_url)
      .then(res => res.json())
      .then(data => setChannelApiData(data.items[0]))

    // fetching comment data
    const comment_Url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_Url)
      .then(res => res.json())
      .then(data => setCommentData(data.items))
  }

  useEffect(() => {
    video_Data();
  }, [videoId])

  useEffect(() => {
    channel_Data();
  }, [apiData])

  return (
    <div className='play-video'>
      {/* <video src={video} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allowfullscreen></iframe>
      <h3> {apiData ? apiData.snippet.title : "Title Here"} </h3>
      <div className="play-video-info">
        <p>{apiData ? value_converter(apiData.statistics.viewCount) : "16K"} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""} </p>
        <div>
          <span><img src={like} alt="like" /> {apiData ? value_converter(apiData.statistics.likeCount) : 155} </span>
          <span><img src={dislike} alt="dislike" />2</span>
          <span><img src={share} alt="share" />Share</span>
          <span><img src={save} alt="save" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelApiData ? channelApiData.snippet.thumbnails.default.url : ""} alt="channel logo" />
        <div>
          <p> {apiData ? apiData.snippet.channelTitle : "Channel Title Here"} </p>
          <span>{channelApiData ? value_converter(channelApiData.statistics.subscriberCount) : "1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description Here"} </p>
        <hr />
        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 102} Comments</h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user profile" />
              <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span> {moment(item.snippet.topLevelComment.publishedAt).fromNow()}</span> </h3>
                <p> {item.snippet.topLevelComment.snippet.textDisplay} </p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="" />
                  <span>2</span>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default PlayVideo