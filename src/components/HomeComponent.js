import "./HomeComponent.css";
import VideoPreviewComponent from "./VideoPreviewComponent";
import HeaderComponent from "./Header";
function HomeComponent() {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <div className="main">
        <div className="sidebar">
          <div className="sidebarItem">Home</div>
          <div className="sidebarItem">Channels</div>
          <div className="sidebarItem">Videos</div>
          <div className="sidebarItem">Liked Videos</div>
        </div>
        <div className="videos">
          <VideoPreviewComponent title="This is first video 1" />
          <VideoPreviewComponent title="This is first video 2" />
          <VideoPreviewComponent title="This is first video 3" />
          <VideoPreviewComponent title="This is first video 4" />
          <VideoPreviewComponent />
          <VideoPreviewComponent />
          <VideoPreviewComponent />
          <VideoPreviewComponent />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
