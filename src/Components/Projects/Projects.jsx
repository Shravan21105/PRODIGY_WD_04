import React from 'react';
import styles from './Projects.module.css';
import projects from '../../data/projects.json'; // Ensure this path is correct
import { ProjectCard } from './ProjectCard';

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.length > 0 ? (
          projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
