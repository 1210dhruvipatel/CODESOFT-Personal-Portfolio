import React from "react";
import "./project.css"
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";

const Data = [
    {
        id: 1,
        imgSrc: './images/travel2.png',
        project: "Fullstack Travel Planner",
        Disc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae ipsa repudiandae debitis, ducimus autem illo reprehenderit accusantium eveniet qui!",
        tech1: "React JS",
        tech2: "MongoDB",
        tech3: "Node JS",
        tech4: "Express",
        link:"https://github.com/1210dhruvipatel/MERN-Travel-Planner/tree/master?tab=readme-ov-file"
    },
    {
        id: 2,
        imgSrc: './images/landing.png',
        project: "Landing Page",
        Disc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae ipsa repudiandae debitis, ducimus autem illo reprehenderit accusantium eveniet qui!",
        tech1: "HTML",
        tech2: "CSS",
        tech3: "JavaScript",
        link:"https://github.com/1210dhruvipatel/Landing-page/tree/master/Landing%20page"
    },
    {
        id: 3,
        imgSrc: './images/travel1.png',
        project: "Travel Planner UI",
        Disc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae ipsa repudiandae debitis, ducimus autem illo reprehenderit accusantium eveniet qui!",
        tech1: "HTML",
        tech2: "CSS",
        tech3: "React JS",
        link:"https://github.com/1210dhruvipatel/Traveling-website-react"
    }
]

const Project = () => {
    return (
        <>

            <div className="project">
                <div>
                    <p className="heading-text">Projects</p>
                </div>
                <div className="project-container">
                    {Data.map(({ id, imgSrc, project, Disc, tech1,tech2,tech3,tech4,link }) => {
                        return (
                            <div key={id} className="project-item">
                                <div className="project-box">
                                    <div className="main">
                                        <img className="img-fluid" src={imgSrc} alt="img" />
                                    </div>
                                    <div className="project-layer">
                                        <p>
                                            {Disc}
                                        </p>
                                        <ul className="tech">
                                            <li>{tech1}</li>
                                            <li>{tech2}</li>
                                            <li>{tech3}</li>
                                            <li>{tech4}</li>
                                        </ul>
                                        <Link to={link}><AiOutlineLink className="icon"/></Link>
                                    </div>
                                </div>
                                <h1 className="project-title">{project}</h1>
                            </div>
                        );
                    })}
                </div>
                <Link to='https://github.com/1210dhruvipatel'><button className='btn'>Explore More...</button></Link>
            </div>
        </>
    );
}

export default Project;