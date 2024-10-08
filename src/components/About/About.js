import React, { useEffect, useState } from "react";
import "./About.css"
import Animation from "../Animation/Animation";

export default function About() {

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    }, []);

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <Animation 
                        letterClass={letterClass}
                        strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                        idx={15} />
                </h1>
                <p>I am a software engineering student seeking an internship to further my skills, knowledge, and career.
                </p>
                <p>Versed in Java, Python, Javascript, SQL, and collaborative teamwork, I like to produce tangible solutions with immediate feedback.
                </p>
                <p>Being open minded to many aspects of technology, from pentesting to app development, I am eager to contribute to software solutions.
                </p>
            </div>
        </div>
    )
}