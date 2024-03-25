import React from 'react'
import IMG1 from '../Images/Page7/cat-2946028_1920.jpg';
import IMG2 from '../Images/Page7/pelican-7551248_1920.jpg';
import IMG3 from '../Images/Page7/swan-8242931_1920.jpg';
import IMG4 from '../Images/Page7/garden-3604874_1920.jpg';
import IMG5 from '../Images/Page7/roses-5177980_1920.jpg';
import IMG6 from '../Images/Page7/sunset-4086848_1920.jpg';
import IMG7 from '../Images/Page7/sunset-6764266_1920.jpg';

function Page7() {

  document.title ="EggeShell Studio - Peach Fuzz";
  
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
          <h1>Peach Fuzz</h1>
          <p>Branding</p>
          <div className="img-Conatiner2 "><img src={IMG2} alt="" /></div>
          <div className="img-Conatiner3"><img src={IMG3} alt="" /></div>
          <div className="Inner-img">
            <div className="img-Conatiner4"><img src={IMG4} alt="" /></div>
            <div className="img-Conatiner5"><img src={IMG5} alt="" /></div>
            <div className="img-Conatiner6"><img src={IMG6} alt="" /></div>
            <div className="img-Conatiner7"><img src={IMG7} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page7
