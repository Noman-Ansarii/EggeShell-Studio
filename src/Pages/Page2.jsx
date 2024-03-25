import React from 'react'
import IMG1 from '../Images/Page2-Art/main.jpg'
import IMG2 from '../Images/Page2-Art/art-supplies-and-painting.jpg'
import IMG3 from '../Images/Page2-Art/art-supplies.jpg'
import IMG4 from '../Images/Page2-Art/artist-props-collection-table.jpg'
import IMG5 from '../Images/Page2-Art/blank-paper-on-paint-easel.jpg'
import IMG6 from '../Images/Page2-Art/gift-wrapping-supplies.jpg'
import IMG7 from '../Images/Page2-Art/ladder-plant-shelf.jpg'

function Page2() {

  document.title ="EggeShell Studio - Art";

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
          <h1>Art Creations</h1>
          <p>Branding of Art</p>
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

export default Page2
