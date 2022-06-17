import React from "react";
import styles from "./ProjectComponent.module.css";
import ProjectCard from "./ProjectCard";
export default function ProjectComponent() {
  const Projects = [
    {
      id: 1,
      name: "Project 1",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ex, doloribus reiciendis mollitia, hic rem ipsa nisi aliquid deleniti similique quidem fugiat libero exercitationem tenetur vitae voluptas adipisci nam a.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis quae magnam, commodi saepe sequi in dolores tenetur illum repudiandae blanditiis quibusdam expedita facere ad rerum quos ut, obcaecati maiores.`,
      image: "Test.png",
      link: "https://www.google.com",
      worked: "Worked as FullStack",
    },
    {
      id: 2,
      name: "Project 2",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ex, doloribus reiciendis mollitia, hic rem ipsa nisi aliquid deleniti similique quidem fugiat libero exercitationem tenetur vitae voluptas adipisci nam a.`,
      image: "Test.png",
      link: "https://www.google.com",
      worked: "Worked as FrontEnd",
    },
    {
      id: 3,
      name: "Project 3",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ex, doloribus reiciendis mollitia, hic rem ipsa nisi aliquid deleniti similique quidem fugiat libero exercitationem tenetur vitae voluptas adipisci nam a.`,
      image: "Test.png",
      link: "https://www.google.com",
      worked: "Worked as BackEnd",
    },
  ];

  return (
    <div className={styles.TOP}>
      <div className={styles.Heading}>
        <h1>Projects</h1>
      </div>
      <div className={styles.container}>
        {Projects.map((project) => (
          <ProjectCard key={project.id} data={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
}
