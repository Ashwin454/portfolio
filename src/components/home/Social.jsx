import React from "react";
import { FiCode, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/Ashwin454" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/ashwin-jaiswal-0b22262b8/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
            <a href="https://leetcode.com/Ashwin454/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FiCode />  {/* Replace FiGlobe with an appropriate icon if you want */}
            </a>
        </div> 
    ); 
}

export default Social;