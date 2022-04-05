import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Buttons() {
    return (
       <div className="social-buttons">
           
         <button> <FontAwesomeIcon icon={faLinkedin} className="icons"></FontAwesomeIcon><a href="https://www.linkedin.com/in/sarah-k-la-washington-167943139/">LinkedIn</a></button>
        <button> <FontAwesomeIcon icon={faEnvelope} className="icons"></FontAwesomeIcon><a href="mailto:saewashi@iu.edu">Email</a></button>
       </div>
    )
}