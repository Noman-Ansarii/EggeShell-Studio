import React, {useState} from 'react';
import IMG1 from '../Images/Page4-Food/strawberries-7391738_1920.jpg';
import IMG2 from '../Images/Page4-Food/tomato_-_75271 (Original).mp4';
import IMG3 from '../Images/Page4-Food/apples-7566512_1920.jpg';
import IMG4 from '../Images/Page4-Food/dessert-352475_1920.jpg';
import IMG5 from '../Images/Page4-Food/fruits-3441830_1920.jpg';
import IMG6 from '../Images/Page4-Food/market-4275799_1920.jpg';
import IMG7 from '../Images/Page4-Food/still-life-930749_1920.jpg';

function Page1() {
  document.title ="EggeShell Studio - Fruite Collection";

  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const togglevideo = () =>{
    const video = document.getElementById('videoElement');

    if(video){
      if(video.paused) {
        video.play();
      }
      else{
        video.pause();
      }

      setIsVideoPlaying(!video.paused);
    }
  }
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
          <h1>Fruite Legacy</h1>
          <p>Branding of Purety</p>
          <div className="img-Conatiner2">
            <i className={`bx ${isVideoPlaying ? 'bx-pause-circle' : 'bx-play-circle'}`} onClick={togglevideo}></i>
            <video id='videoElement' src={IMG2} frameBorder="0" autoPlay muted loop playsInline />
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
