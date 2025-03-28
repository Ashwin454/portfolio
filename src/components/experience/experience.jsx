import React, { useState } from 'react';
import './experience.css';
import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';

const Experience = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
    <section className="services section" id="services">
        <h2 className="section__title">Experience</h2><br></br>    
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">Research Intern<br />Chanakya, IIT Bombay</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                        <h3 className="services__modal-title">Research Intern</h3>
                        <p className="services__modal-description">
                            Chanakya, IIT Bombay
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                Project Title: Development of laser bending strategy with IoT based sensors and control
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                Working on containerization and deployment of the ML model using cloud-based infrastructure
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                Built and maintained an application that interacts with an ML model deployed on the cloud, integrating with the Laser Bending Machine.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        
    </section>
  );
}

export default Experience;