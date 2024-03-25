import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import LOGO from '../Images/Logo.png';
import IMG from '../Images/IMG.jpeg';
import IMG1 from '../Images/Business-Page1/teamwork-3213924.jpg';
import IMG2 from '../Images/Page2-Art/main.jpg';
import IMG3 from '../Images/Earth-Page3/australia-4242493_1920.jpg';
import IMG4 from '../Images/Page4-Food/strawberries-7391738_1920.jpg';
import IMG5 from '../Images/Page5-Photography/belgium-7826588_1920.jpg';
import IMG6 from '../Images/Page6/background-6556413_1920.png';
import IMG7 from '../Images/Page7/cat-2946028_1920.jpg';
import IMG8 from '../Images/Page8/ai-generated-7729402_1920.jpg';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenu2Open, setMenu2Open] = useState(false);
  const [isMenu3Open, setMenu3Open] = useState(false);

  const handleMenuToggle = (menuState, setMenuState) => {
    setMenuState(!menuState);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

  const toggleBodyOverflow = (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }

  useEffect(() => {
    const handleBodyClick = (event) => {
      // Check if the click is outside the dropdownMenus
      if (
        !event.target.closest('.dropDownMenu') &&
        !event.target.closest('.nav-links') &&
        !event.target.closest('.Containers')
      ) {
        setMenuOpen(false);
        setMenu2Open(false);
        setMenu3Open(false);
        toggleBodyOverflow(false);
      }
    };

    // Add event listener when the component mounts
    document.body.addEventListener('click', handleBodyClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="nav-conatiner">
            <div className="Web-Logo" data-aos="fade-down">
              <a href="/"><img src={LOGO} alt="" /></a>
              <a href="/"><h1>EGGSHELL STUDIO</h1></a>
            </div>
            <div className="nav-item" data-aos="fade-down">
              <div className="nav-links">
                <i
                  className={`bx bx-grid-vertical ${isMenu3Open ? 'active' : ''}`}
                  onClick={() => {
                    handleMenuToggle(isMenu3Open, setMenu3Open);
                    toggleBodyOverflow(!isMenu3Open);
                  }}
                ></i>
              </div>
              <div className="nav-links">
                <i
                  className={`bx bx-smile ${isMenuOpen ? 'active' : ''}`}
                  onClick={() => {
                    handleMenuToggle(isMenuOpen, setMenuOpen);
                    toggleBodyOverflow(!isMenuOpen);
                  }}
                ></i>
              </div>
              <div className="nav-links">
                <i
                  className={`bx bx-envelope ${isMenu2Open ? 'active' : ''}`}
                  onClick={() => {
                    handleMenuToggle(isMenu2Open, setMenu2Open);
                    toggleBodyOverflow(!isMenu2Open);
                  }}
                ></i>
              </div>
            </div>
          </div>

          <motion.div
            className={`dropDownMenu ${isMenuOpen ? 'active' : ''}`}
            animate={isMenuOpen ? "open" : "closed"}
            variants={variants}
            onAnimationComplete={() => toggleBodyOverflow(isMenuOpen)}
          >
            <i className='bx bx-x sidebarClose' onClick={() => setMenuOpen(false)}></i>
            <img src={IMG} alt="" />
            <h1>CREATIVE DESIGN SOLUTIONS</h1>
            <p>I am // //, and via Eggshell Studio I provide agile creative services, including branding, illustration, digital and print solutions.</p>
            <p>Together with like-minded professionals, consisting of leading creatives and communications strategists, I’ve had the opportunity to work on projects ranging from small business start-ups to large corporate campaigns.</p>
            <p>With over 20 years of experience, my ability to have an overall vision helps with varied projects.</p>
          </motion.div>

          <motion.div
            className={`dropDownMenu2 ${isMenu2Open ? 'active' : ''}`}
            animate={isMenu2Open ? "open" : "closed"}
            variants={variants}
            onAnimationComplete={() => toggleBodyOverflow(isMenu2Open)}
          >
            <i className='bx bx-x sidebarClose2' onClick={() => setMenu2Open(false)}></i>
            <h1>LET'S CHAT</h1>
            <div className="contact">
              <a href="mailto:+923237375911" target='_blank' rel="noreferrer"><i className='bx bxs-phone'></i></a>
              <a href="mailto:ansariaya995@gmail.com" target='_blank' rel="noreferrer"><i className='bx bxl-gmail' ></i></a>
              <a href="link" target='_blank' rel="noreferrer"><i className='bx bxl-linkedin' ></i></a>
              <a href="link" target='_blank' rel="noreferrer"><i className='bx bxl-instagram' ></i></a>
            </div>
          </motion.div>

          <motion.div
            className={`dropDownMenu3 ${isMenu3Open ? 'active' : ''}`}
            animate={isMenu3Open ? "open" : "closed"}
            variants={variants}
            onAnimationComplete={() => toggleBodyOverflow(isMenu3Open)}
          >
            <i className='bx bx-x sidebarClose3' onClick={() => setMenu3Open(false)}></i>
            <div className="Containers">
              <div className="article"><a href="/Business"><img src={IMG1} alt="" /></a></div>
              <div className="article"><a href="/Art"><img src={IMG2} alt="" /></a></div>
              <div className="article"><a href="/Earth"><img src={IMG3} alt="" /></a></div>
              <div className="article"><a href="/Food-Friute"><img src={IMG4} alt="" /></a></div>
              <div className="article"><a href="/Photography"><img src={IMG5} alt="" /></a></div>
              <div className="article"><a href="/Art-Prints-Illustration"><img src={IMG6} alt="" /></a></div>
              <div className="article"><a href="/Peach-Fuzz"><img src={IMG7} alt="" /></a></div>
              <div className="article"><a href="/AI-Art"><img src={IMG8} alt="" /></a></div>
            </div>
          </motion.div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
