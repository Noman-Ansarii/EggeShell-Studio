import React from 'react'
import IMG1 from '../Images/Page6/background-6556413_1920.png';
import IMG2 from '../Images/Page6/mountains-5689938_1920.jpg';
import IMG3 from '../Images/Page6/sunset-7790621_1920.jpg';
import IMG4 from '../Images/Page6/everest-4828404_1920.png';
import IMG5 from '../Images/Page6/landscape-7404347_1920.jpg';
import IMG6 from '../Images/Page6/sun-7522095_1920.jpg';
import IMG7 from '../Images/Page6/trees-4741364_1920.png';

function Page5() {

  document.title ="EggeShell Studio - Art Prints";
  
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
          <h1>Art Prints - Illustration</h1>
          <p>Branding Of Paint & Art</p>
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
