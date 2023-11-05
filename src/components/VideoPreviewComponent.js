function VideoPreviewComponent(props) {
  const title = props.title;
  return (
    <div className="video">
      <div className="thumbnail">
        <img src="https://i.ytimg.com/vi/IhYDtLzmRQI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJoBSPhga_OZ2MZ0hn-YOfB1HpHA" />
      </div>
      <div className="titlewrapper">
        <div className="channelphoto">
          <img src="https://yt3.ggpht.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s68-c-k-c0x00ffffff-no-rj" />
        </div>
        <div className="title">{title}</div>
      </div>
      <div className="channel">MrWhosTheBoss</div>
      <div className="views">1.3M views . 18 hours ago</div>
    </div>
  );
}

export default VideoPreviewComponent;
