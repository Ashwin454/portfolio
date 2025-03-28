import React from 'react';
import { projectsData } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = () => {
    return (
        <div>
            <div className="project__container container grid">
                {projectsData.map((item) => (
                    <ProjectItems item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
