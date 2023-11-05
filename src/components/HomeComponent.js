import "./HomeComponent.css";
import VideoPreviewComponent from "./VideoPreviewComponent";

function HomeComponent() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo">Logo</div>
        <div className="search">Search</div>
        <div className="signin">Signin</div>
      </div>
      <div className="main">
        <div className="sidebar">Sidebar</div>
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
}

export default HomeComponent;
