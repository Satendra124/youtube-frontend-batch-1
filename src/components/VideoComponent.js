import HeaderComponent from "./Header";
import SuggestedVideo from "./SuggestedVideo";
import "./VideoComponent.css";

const VideoPage = () => {
  return (
    <div className="wrapper-video">
      <HeaderComponent />
      <div className="main-video">
        <div className="videoWrapper">
          <iframe
            src="https://www.youtube.com/embed/Hy55Ij78amM?rel=0&mute=1&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="iframe"
          ></iframe>
          <div className="title-video"> This is the title fo the page</div>
          <div className="channelWrapper">
            <div className="channel-video">
              <img
                src={
                  "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s68-c-k-c0x00ffffff-no-rj"
                }
                className="channelImage"
              />
              <div className="channelInfo">
                <div>MrWhosTheBoss</div>
                <div>2.3M Subscribers</div>
              </div>
              <button className="channelButton">Subscribe</button>
            </div>
            <div className="likesWrappper">
              <button className="channelButtonLite">Like</button>
              <button className="channelButtonLite">Dislike</button>
              <button className="channelButtonLite">Share</button>
            </div>
          </div>
          <div className="description">This is description</div>
        </div>
        <div className="suggestions">
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
