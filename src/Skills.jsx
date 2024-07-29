import React from "react";
import skillData from "./skillData";

const Skills = () => {
    return (
        <>
            <div className="skill-slider">
                <div className="slider-track">
                    {
                        skillData.map((e, index) => {
                            return (
                                <>
                                    <div className="slide" key={index}>
                                        <div className="skill-icon">{e.icon}</div>
                                        <p>{e.name}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Skills;