import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "720",
      width: "1280",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div>
        <div className="flex justify-start h-full">
          <YouTube videoId="NKfXr_9xk2Q" opts={opts} onReady={this._onReady} />
        </div>
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}
