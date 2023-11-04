import React from "react";
import styles from "../styles/video.module.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";

function Video() {
  return (
    <>
      <div className={styles.video}>
        <MediaPlayer
          className={styles.video}
          src="https://upcdn.io/FW25bjZ/raw/defypromo.mp4"
          muted={true}
          loop={true}
          autoplay={true}
          playbackRate={1.75}
          aspectRatio=""
          xx
        >
          <MediaProvider />
        </MediaPlayer>
      </div>
    </>
  );
}

export default Video;
