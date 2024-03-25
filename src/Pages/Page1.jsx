import React from 'react'
import IMG1 from '../Images/Business-Page1/teamwork-3213924.jpg'
import IMG2 from '../Images/Business-Page1/job-5382501_1920.jpg'
import IMG3 from '../Images/Business-Page1/computer-820281_1920.jpg'
import IMG4 from '../Images/Business-Page1/startup-593341_1920.jpg'
import IMG5 from '../Images/Business-Page1/meeting-594091_1920.jpg'
import IMG6 from '../Images/Business-Page1/teamwork-makes-the-dream-work.jpg'
import IMG7 from '../Images/Business-Page1/startup-desktop.jpg'

function Page1() {

  document.title ="EggeShell Studio - Business";
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
          <h1>BUSINESS</h1>
          <p>Branding</p>
          <div className="img-Conatiner2"><img src={IMG2} alt="" /></div>
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

export default Page1
