import React, { Component } from "react";

import Video from "./components/Video/Video";
import Chat from "./components/Chat/Chat"

import style from "./App.module.scss";

export default class App extends Component {
  render() {
    return (
      <div className={style.principal}>
        <Video />
        <Chat />
      </div>
    );
  }
}
