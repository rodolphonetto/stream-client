/* eslint-disable semi */
import React, { Component } from 'react';
// import flvjs from "flv.js";

import style from './video.module.scss';

class Video extends Component {
  // componentDidMount() {
  //   if (flvjs.isSupported()) {
  //     var videoElement = document.getElementById("videoElement");
  //     var flvPlayer = flvjs.createPlayer({
  //       type: "flv",
  //       url: "http://localhost:8000/live/STREAM_NAME.flv"
  //     });
  //     flvPlayer.attachMediaElement(videoElement);
  //     flvPlayer.load();
  //     flvPlayer.play();
  //   }
  // }

  render () {
    return (
      <div className={style.videoBackground} />
      // <video
      //   className={style.video}
      //   id="videoElement"
      //   controls
      //   autoplay="autoplay"
      // />
    );
  }
}

export default Video;
