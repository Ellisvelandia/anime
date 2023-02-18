import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import video from "../../../assets/video.mp4";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <div className="h-[50vh] relative">
      <video
        ref={vidRef}
        src={video}
        type="video/mp4"
        loop
        poster="https://e0.pxfuel.com/wallpapers/911/630/desktop-wallpaper-new-anime-laptop-top-laptop-background-cool-anime.jpg"
        controls={false}
        className="w-full h-full object-fill"
      />
      <div
        className="absolute inset-0 flex__center"
        style={{
          background: "rgba(0,0,0,0.65)",
        }}
      >
        <div className="w-full h-full rounded flex__center">
          {playVideo ? (
            <BsPauseFill
              color="#fff"
              fontSize={40}
              className="cursor-pointer"
              onClick={() => {
                setPlayVideo(!playVideo);
                if (playVideo) {
                  vidRef.current.pause();
                } else {
                  vidRef.current.play();
                }
              }}
            />
          ) : (
            <BsFillPlayFill
              color="#fff"
              fontSize={40}
              className="cursor-pointer"
              onClick={() => {
                setPlayVideo(!playVideo);
                if (playVideo) {
                  vidRef.current.pause();
                } else {
                  vidRef.current.play();
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
