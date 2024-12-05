import React, { useEffect } from 'react';
import Plyr from 'plyr';  // Import Plyr
import 'plyr/dist/plyr.css';  // Import Plyr's CSS

const VideoPlayer = () => {
  useEffect(() => {
    // Initialize the Plyr player on the video element
    const player = new Plyr('#player', {
      // Optional configuration options
      autoplay: true,
    });

    // Cleanup the player when the component unmounts
    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div>
      <video id="player" controls>
        <source src="https://cdn.plyr.io/static/demo/BigBuckBunny.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
