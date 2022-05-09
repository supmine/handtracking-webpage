import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "480",
      width: "854",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div>
        <h1 className="flex justify-center p-14 text-4xl">Demo</h1>
        <div className="flex justify-start h-full">
          <YouTube videoId="6fjPiT3ziBc" opts={opts} onReady={this._onReady} />
        </div>
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}
