"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";
const projectsData = [
  {
    id: 1,
    title: "Heart Disease Detection and Medical Assistance",
    description:
      "It is a one-shot application for getting Medical Assistance and Detection of Heart disease.The Recommedations are given by doctors and the patients can view them, while the radiologists can upload images for detection",
    image: "/projects/BE.jpg",
    tag: ["All", "Data Science"],
    githubLink: "https://github.com/SHREYAS290601/Heart-Health-BE-PROJECT",
  },
  {
    id: 2,
    title: "Fitness Tracker Application",
    description:
      "In this project, I developed a model for classifying exercise types using fitness tracker data collected over a week. The goal was to create an accurate and reliable system for categorizing different types of exercises based on the collected data.",
    image: "/projects/Fitness.jpg",
    tag: ["All", "Data Science"],
    githubLink: "https://github.com/SHREYAS290601/Fitness-Tracker",
  },
  {
    id: 3,
    title: "Microservices with Python, Flask and Kubernetes",
    description:
      "Implemented a microservices-based project using Flask for the backend, MongoDB for data storage, and orchestration through Kubernetes (k8) via Minikube. The project aimed to provide video to MP3 conversion services with an efficient and scalable architecture.",
    image: "/projects/Microservices.jpg",
    tag: ["All", "Web"],
    githubLink: "https://github.com/SHREYAS290601/Microservices-MP3-Converter",
  },
  {
    id: 4,
    title: "Todo FARM Stack Application",
    description:
      "It is a Todo Application that has authentication and can help users entire their daily tasks",
    image: "/projects/todo.jpg",
    tag: ["All", "Web"],
    githubLink: "https://github.com/SHREYAS290601/TODO-FARM-STACK",
  },
  {
    id: 5,
    title: "Olympics Data Analysis",
    description: "A UI based analysis project that is based on Olympics Data",
    image: "/projects/Olympics.jpg",
    tag: ["All", "Analysis"],
    githubLink: "https://github.com/SHREYAS290601/Olympics-Analysis",
  },
  {
    id: 6,
    title: "Movie Recommendation System",
    description: "A Movie Recommendation System based on Vector Similarity",
    image: "/projects/Movie.png",
    tag: ["All", "Analysis"],
    githubLink: "https://github.com/SHREYAS290601/Movie-Recommendation",
  },
];

function ProjectSection() {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-16 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Data Science"
          onClick={handleTagChange}
          isSelected={tag === "Data Science"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag == "Web"}
        />
        <ProjectTag
          name="Analysis"
          onClick={handleTagChange}
          isSelected={tag == "Analysis"}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectSection;
