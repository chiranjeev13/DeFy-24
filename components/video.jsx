import React from "react";
import styles from "../styles/video.module.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import AnimatedScrollButton from '@/components/AnimatedScrollButton';
import video from "../assets/defypromo.mp4"

function Video() {
  return (
    <div className={styles.videoWrapper}>
      <MediaPlayer
        className={styles.video}
        src=video
        muted={true}
        loop={true}
        autoplay={true}
        playbackRate={1.75}
        aspectRatio="9:16"
      >
        <MediaProvider />
        <AnimatedScrollButton onClick={() =>
          document.getElementById('ticker').scrollIntoView()
        } />
      </MediaPlayer>
    </div>
  );
}

export default Video;
