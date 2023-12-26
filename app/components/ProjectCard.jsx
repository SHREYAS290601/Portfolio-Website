import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, githubLink }) => {
  return (
    <div className="ml-14 mt-10">
      <div
        className="group rounded-md h-72 bg-center relative items-center justify-center"
        src={imgUrl}
        alt={title}
        style={{ background: `url(${imgUrl})`, backgroundSize:"cover" ,width:"128px",height:"64px",scale:"2.5",margin:"70px 0 0 70px"}}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-0 transition-all duration-300 items-center justify-center hover:scale-50">
          <Link
            href={githubLink}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
        </div>
      </div>
      <div className="bg-[#181818] rounded-b-xl py-6 px-4 text-white">
        <h5 className="font-lg font-semibold mt-16 -ml-10">{title}</h5>
        <p className="text-[#ADB7BE] sm:mb-20 -ml-10">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
