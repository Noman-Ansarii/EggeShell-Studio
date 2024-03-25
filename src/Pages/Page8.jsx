import React from 'react'
import IMG1 from '../Images/Page8/ai-generated-7729402_1920.jpg';
import IMG2 from '../Images/Page8/steampunk-7671520_1920.jpg';
import IMG3 from '../Images/Page8/ai-generated-7500019_1920.jpg';
import IMG4 from '../Images/Page8/ai-generated-7573681_1920.jpg';
import IMG5 from '../Images/Page8/ai-generated-7677419_1920.jpg';
import IMG6 from '../Images/Page8/book-7709416_1920.jpg';
import IMG7 from '../Images/Page8/generated-7683185_1920.jpg';

function Page8() {
  document.title ="EggeShell Studio - AI Art";
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
          <h1>AI art</h1>
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

export default Page8
