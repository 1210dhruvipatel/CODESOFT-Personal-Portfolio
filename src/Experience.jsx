import React from "react";
import "./experience.css";

const Experience = () => {
    return (
        <>
            <p className="heading-text">Experience</p>
            <div className="timeline">
            <div className="data-container left-data-container">
                    <img src="../Images/recommendation.png" alt="" />
                    <div className="text-box">
                        <h3>Compatible Solutions</h3>
                        <small>Fabruary 2024 - April 2024 (3 Month)</small>
                        <p>My three month internship in front-end development encompassing React, MongoDB, Node and Express was an invaluable learning journey. I grasped fundamental concepts in fullstack development, honed my coding skills, and gained practical experience in crafting responsive and visually appealing web interfaces. This internship has laid a strong foundation for my career in web development and left me eager to explore further.</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
                <div className="data-container right-data-container">
                    <img src="../Images/recommendation.png" alt="" />
                    <div className="text-box">
                        <h3>Izonnet Web Solution</h3>
                        <small>August 2023 (2 Weeks)</small>
                        <p>In my 15-day internship focused on front-end React development, I delved into the fundamental concepts of React and gained practical experience in using Material UI. This intensive learning experience not only deepened my understanding of React but also allowed me to create dynamic and visually appealing user interfaces. I'm now well-prepared to continue my journey in front-end development with a strong React foundation.</p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>
                <div className="data-container left-data-container">
                    <img src="../Images/recommendation.png" alt="" />
                    <div className="text-box">
                        <h3>Oasis Infobyte</h3>
                        <small>May 2023(1 month)</small>
                        <p>Over the course of my enriching one month virtual internship in front-end development, I immersed myself in HTML, CSS, and JavaScript, while also gaining proficiency in Bootstrap and Tailwind CSS frameworks. This comprehensive experience not only solidified my understanding of core web technologies but also equipped me with the skills to create dynamic and responsive user interfaces. I am excited to continue building on this foundation in my future endeavors in web development.</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;