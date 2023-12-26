"use client";
import React from "react";
import Image from "next/image";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Minning</li>
        <li>EDA and Visualization</li>
        <li>MySql & MongoDB</li>
        <li>Pandas</li>
        <li>Sklearn</li>
        <li>Predictive Modeling with Pytorch and Tensorflow</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Data Science trainee</li>
        <li>SPPU undergraduate 9.44 GPA</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Associate Data Scientist at Apptware Pvt. Ltd.</li>
        <li>Earth Data Scientist at Datasmith-Solutions Pvt. Ltd</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Honors in Data Science</li>
        <li>Microsoft Azure AI-900 Certified</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white lg:mt-40 md:mt-20 sm:mt-14">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image
          src="/images/about_page.png"
          width={500}
          height={500}
          alt="About me"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-[#ADB7BE] texxt-base md:text-lg">
            I am an Aspiring Computer Engineer who is looking for a fruitful
            career in the field of Data Science, Data Analysis and becoming a
            Proficient Software Development Engineer. I aim to use my skills of
            analysis, out-of-box thinking and perseverance to create, manage and
            collaborate on useful systems for the benefit of the society.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
