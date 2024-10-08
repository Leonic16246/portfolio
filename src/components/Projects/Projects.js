import './Projects.css';
import { useEffect, useState } from "react";
import Animation from '../Animation/Animation';
import projectsList from "../../data/projects.json";

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    }, []);

    const renderProjects = () => {
        return (
            <div className="projects-container">
                {projectsList.project.map((project, idx) => (
                    <div key={idx} className="project-card">
                        <img src={require(`../../${project.imgsrc}`)} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <ul>
                            {project.skills.map((skill, skillId) => (
                                <li key={skillId}>{skill}</li>
                            ))}
                        </ul>
                        <div>
                            <a href={project.source} target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="container projects-page">
            <div className="text-zone">
                <h1>
                    <Animation 
                        letterClass={letterClass}
                        strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
                        idx={15} 
                    />
                </h1>
                <div>{renderProjects()}</div>
            </div>
        </div>
    );
}

export default Projects;
