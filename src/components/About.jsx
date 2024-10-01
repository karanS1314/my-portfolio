import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import profilePic from "../assets/images/gurkaran_pic.jpeg";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
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
      </div>
    </div>
  );
}

export default About;
