"use client";
import React from "react";
import Link from "next/link";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Image from "next/image";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const EmailSection = () => {
  const form = useRef();
  // console.log(process.env);
  // console.log(process.env.NEXT_PUBLIC_PUBLIC_KEY);
  const sendEmail = (e) => {
    const emailTemplate = {
      to_name: "Shreyas Kulkarni",
      from_name: form.current.email.value,
      message: form.current.message.value,
      subject: form.current.subject.value,
    };
    console.log(emailTemplate);
    e.preventDefault();
    console.log("Sending Email");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        emailTemplate,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative" id="#contact">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking htmlFor new opportunities, my inbox is
          always open. Whether you have a question or just want to say hi,
          I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/SHREYAS290601">
            <Image width={50} height={30} src={GithubIcon} alt="" />
          </Link>
          <Link href="https://www.linkedin.com/in/shreyaskulkarni29/">
            <Image width={50} height={30} src={LinkedinIcon} alt="" />
          </Link>
        </div>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="ABC@google.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {" "}
              Send message{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
