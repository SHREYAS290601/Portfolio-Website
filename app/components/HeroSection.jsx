"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
        <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
          <h1 className="mt-36 text-white max-w-2xl mb-4 lg:text-8xl text-4xl font-extrabold">
            <span className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-red-500">
              Hello, I&apos;m{" "}
            </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Shreyas Kulkarni",
                1000,
                "Data Scientist",
                1000,
                "Data Analyst",
                1000,
                "Python Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            A Data Scientist with a passion for solving real-world problems
            using data. I am a self-taught programmer and a quick learner.
          </p>
          <div>
            <button className="md:w-32 sm:w-full bg-gradient-to-br from-purple-500 to-red-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
              Hire Me
            </button>
            <button className="mt-4 md:w-44 sm:w-full bg-gradient-to-br from-purple-500 to-red-500 px-1 py-1  text-white rounded-full">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0 mb-3">
          <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
            <Image
              src="/images/Primary.png"
              width={300}
              height={300}
              alt="Shreyas Kulkarni"
              className="mt-16 lg:ml-10 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
