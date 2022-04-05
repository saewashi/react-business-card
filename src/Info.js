import logo from './logo.svg';

import './App.css';
import Buttons from './Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Info() {
  return (
     <main>
     <img src="https://womenandtech.indiana.edu/images/people/sarah-kla-portrait-5.jpg" />
     <h1 className="name">Sarah K'La Washington</h1>
     <h5>Front-End Engineer</h5>
     <hr />
      <a href="https://saewashi.github.io/washington-sarah-kla-portfolio/">Sarah K'La's Portfolio</a> 
         
      <Buttons />


      <h1 className="about">About</h1>
     <p>I am a Front-End Engineer/Web Developer. I am a recent graduate from Indiana University. I graduated with a dual degree in Interactive Media and Informatics. I also received two minors, one in Psychology and Human-Centered Computing. I work as a part-time Web Developer for IU. I hope to become a full-time Front-End Engineer, with a focus on accessibility.</p>
     <hr />
      <h1 className="interest">Interests</h1>
     <p>One reason I minored in Psychology and Human-Centered Computing, is because I love to know why people react the way the do, and how they interact with technology and how technology interacts with people. My interests are in UI/UX Design, Accessibility, and coding.</p>
      <footer> 
       
      <a href="https://www.linkedin.com/in/sarah-k-la-washington-167943139/"> <FontAwesomeIcon icon={faLinkedin} className="icons"></FontAwesomeIcon></a>
        
      <a href="https://github.com/saewashi"> <FontAwesomeIcon icon={faGithub} className="icons"></FontAwesomeIcon></a>
      <a href="https://saewashi.github.io/washington-sarah-kla-portfolio/">  <FontAwesomeIcon icon={faComputer} className="icons"></FontAwesomeIcon> </a>
      </footer>
     </main>
  )
}
