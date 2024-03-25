import React from 'react'
import IMG1 from '../Images/Page5-Photography/belgium-7826588_1920.jpg';
import IMG2 from '../Images/Page5-Photography/stairway-1136071_1920.jpg';
import IMG3 from '../Images/Page5-Photography/yachts-5971866_1920.jpg';
import IMG4 from '../Images/Page5-Photography/brussels-7826506_1920.jpg';
import IMG5 from '../Images/Page5-Photography/snowflakes-8223860_1920.jpg';
import IMG6 from '../Images/Page5-Photography/architecture-1850732_1920.jpg';
import IMG7 from '../Images/Page5-Photography/bridge-3188599_1920.jpg';

function Page5() {
  document.title ="EggeShell Studio - PhotoGraphy Of Travel";
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
          <h1>Photography</h1>
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

export default Page5
