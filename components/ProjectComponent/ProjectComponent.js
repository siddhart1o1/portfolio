import React from "react";
import styles from "./ProjectComponent.module.css";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function ProjectComponent() {
  const [Projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fethcProjects = async () => {
      const res = await axios.get("https://portfolio-api-bay.vercel.app/");
      setProjects(res.data);
      setTimeout(() =>
        setLoading(false),
        1000
      );
    };
    fethcProjects();
  }, [loading, Projects]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "4rem",
          fontWeight: "bold",
        }}
      >
        Loading...
      </div>
    );
  } else {
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
}
