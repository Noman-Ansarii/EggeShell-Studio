import React, { useState } from 'react';
import IMG1 from '../Images/Earth-Page3/australia-4242493_1920.jpg';
import IMG2 from '../Images/Earth-Page3/aurora_borealis_-_90877 (1080p).mp4';
import IMG3 from '../Images/Earth-Page3/drone-4605203_1920.jpg';
import IMG4 from '../Images/Earth-Page3/mountain-slope-6374980_1920.jpg';
import IMG5 from '../Images/Earth-Page3/waterfall-6889855_1920.jpg';
import IMG6 from '../Images/Earth-Page3/plant-6917093_1920.jpg';
import IMG7 from '../Images/Earth-Page3/forest-6761846_1920.jpg';

function Page1() {
  document.title = "EggeShell Studio - Earth Legacy";

  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    const video = document.getElementById('videoElement');

    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }

      setIsVideoPlaying(!video.paused);
    }
  };

  return (
    <>
      <div className="Page1_Conatiner">
        <div className="img-Conatiner" style={{
          backgroundImage: `url(${IMG1})`, backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
        </div>
        <div className="Page1_Conatiner2">
          <h1>Earth Personality</h1>
          <p>Branding of Beauty</p>
          <div className="img-Conatiner2 ">
            <i
              className={`bx ${isVideoPlaying ? 'bx-pause-circle' : 'bx-play-circle'
                }`}
              onClick={toggleVideo}
            ></i>
            <video
              id="videoElement"
              src={IMG2}
              frameBorder="0"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="img-Conatiner3"><img src={IMG3} alt="" /></div>
          <div className="Inner-img">
            <div className="img-Conatiner4"><img src={IMG4} alt="" /></div>
            <div className="img-Conatiner7"><img src={IMG7} alt="" /></div>
            <div className="img-Conatiner5"><img src={IMG5} alt="" /></div>
            <div className="img-Conatiner6"><img src={IMG6} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
