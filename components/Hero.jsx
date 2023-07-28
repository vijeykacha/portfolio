'use client'

import Image from "next/image";
import {Link as ScrollLink} from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import hero from '@/public/hero.jpeg';

const Hero = () => {
  return (
    <section id="hero">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src={hero}
            alt="Vijay Kacha"
            height={300}
            width={300}
            quality={100}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Vijay!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            based in Rajkot, India. Working towards creating software that makes
            life easier and more meaningful.
          </p>
          <ScrollLink
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </ScrollLink>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <ScrollLink
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
