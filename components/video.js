import React from "react";
import styles from "../styles/video.module.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

function Video() {
  return (
    <>
      <div className={styles.video}>
        <MediaPlayer
          title="Sprite Fight"
          src="https://upcdn.io/FW25bjZ/raw/defypromo.mp4"
          autoplay
          volume={0.5}
        >
          <MediaProvider />
          <DefaultVideoLayout
            icons={defaultLayoutIcons}
          />
        </MediaPlayer>
        ;{" "}
      </div>
    </>
  );
}

export default Video;
