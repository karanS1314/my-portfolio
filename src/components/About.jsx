import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import profilePic from "../assets/images/gurkaran_pic.jpeg";
import Marquee from "react-fast-marquee";
function About() {
  const skillImages = [
    {
      src: "https://www.imanshu.dev/_next/image?url=%2Fimages%2Fskills%2Fnode-dark.webp&w=1080&q=75",
      alt: "Nodejs",
    },
    {
      src: "https://www.imanshu.dev/_next/image?url=%2Fimages%2Fskills%2Fnext-dark.webp&w=640&q=75",
      alt: "Nextjs",
    },
    {
      src: "https://www.imanshu.dev/_next/image?url=%2Fimages%2Fskills%2Fmongo.webp&w=1080&q=75",
      alt: "MongoDB",
    },
    {
      src: "https://www.imanshu.dev/_next/image?url=%2Fimages%2Fskills%2Ftypescript.webp&w=1080&q=75",
      alt: "TypeScript",
    },
    {
      src: "https://www.imanshu.dev/_next/image?url=%2Fimages%2Fskills%2Fhtml.webp&w=1080&q=75",
      alt: "HTML",
    },
    {
      src: "https://www.imanshu.dev/_next/image?url=%2Fimages%2Fskills%2Fcss.webp&w=640&q=75",
      alt: "CSS",
    },
    {
      src: "https://www.imanshu.dev/_next/image?url=%2Fimages%2Fskills%2Fstyled-dark.webp&w=640&q=75",
      alt: "styled components",
    },
    {
      src: "https://www.imanshu.dev/_next/image?url=%2Fimages%2Fskills%2Fjavascript.webp&w=1080&q=75",
      alt: "javascript",
    },
    {
      src: "https://miro.medium.com/v2/resize:fit:400/1*OARpkeBkn_Tw3vk8H769OQ.png",
      alt: "docker",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      alt: "psql",
    },
    {
      src: "https://www.imanshu.dev/_next/image?url=%2Fimages%2Fskills%2Fgit.webp&w=1080&q=75",
      alt: "git",
    },
    {
      src: "https://www.imanshu.dev/_next/image?url=%2Fimages%2Fskills%2Freact.webp&w=640&q=75",
      alt: "react",
    },
    {
      src: "https://www.imanshu.dev/_next/image?url=%2Fimages%2Fskills%2Ftailwind.webp&w=1080&q=75",
      alt: "Tailwind",
    },
  ];
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.2"
      className="w-full bg-black rounded-t-3xl py-10 sm:py-20"
    >
      <div className="container w-full">
        <h1 className="sm:text-3xl text-xl sm:leading-normal font-medium mb-10 border-b-[1px] border-zinc-700 pb-10">
          <div className="rounded-full flex flex-row items-center gap-2 justify-center mt-4 w-fit bg-[#E3E3DE] text-black px-10 py-3 text-sm font-semibold tracking-wider uppercase">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></div>{" "}
            <h1>OPEN TO NEW OPPORTUNITIES</h1>
          </div>
        </h1>

        <div className="md:flex justify-center gap-10 text-[#E3E3DE]">
          <div className="about-text h-fit">
            <h1 className="text-4xl mb-4">About me:</h1>
            <p className="text-base sm:text-xl text-zinc-200 tracking-wide">
              I specialize in developing modern, responsive web applications
              using technologies like React.js, Next.js, TypeScript, and Node.js
              🚀. With a strong foundation in both front-end and back-end
              development, I enjoy crafting user-centric experiences that are
              not only visually appealing 🎨 but also highly functional ⚙️. My
              problem-solving approach, honed through rigorous practice with
              data structures and algorithms, drives me to create efficient
              solutions. I am an expert on Codeforces with a rating of 1601 and
              a LeetCode rank of 1830, continuously striving for excellence in
              every project I undertake.
            </p>
            <br />
            <br />
            <p className="text-base sm:text-xl text-zinc-200 tracking-wide">
              In my free time, I enjoy playing games 🎮, sketching 🎨 and
              exploring new places 🏍️.
            </p>
            <br />
            <br />
            <div className="flex items-center space-x-4 text-base sm:text-xl text-zinc-200 tracking-wide">
              <span>Social Presence:</span>
              <a
                href="https://www.linkedin.com/in/gurkaran-singh-xx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-blue-500 transition-colors" />
              </a>
              <a
                href="https://github.com/karanS1314"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
              </a>
              <a
                href="https://leetcode.com/gurkaran_s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="text-2xl hover:text-yellow-500 transition-colors" />
              </a>
              <a
                href="https://codeforces.com/profile/gurkaran_s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodeforces className="text-2xl hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/karan._.1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-pink-500 transition-colors" />
              </a>
            </div>
          </div>
          <img
            className="w-full rounded-3xl mt-10 md:w-[32vw] md:h-[24vw] md:mt-0"
            src={profilePic}
            alt="profile picture"
          />
        </div>
        <h1 className="text-4xl mt-12 py-4">Skills 🧠</h1>
        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
          <Marquee className="w-full pt-10 px-20" speed={50}>
            {skillImages.map((skill, index) => (
              <img
                key={index}
                className="mx-5 h-[50px] w-[50px] md:h-[100px] md:w-[100px]"
                src={skill.src}
                alt={skill.alt}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default About;
