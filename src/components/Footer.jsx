import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full h-fit text-[#E3E3DE]">
      <div className="container md:flex-row flex flex-col py-10">
        <div className="md:w-1/2 w-full flex flex-col gap-10 justify-between">
          <h1 className="font-FoundersGroteskCondensed uppercase text-6xl">
            GURKARAN <br /> SINGH
          </h1>
          <div className="flex justify-between font-NueueMontreal">
            <p>©2024 | All rights reserved</p>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-between gap-5">
          <div className="links flex flex-col font-NueueMontreal mt-10 md:mt-0">
            <h1 className="font-NueueMontreal text-3xl md:text-4xl mb-4 border-b-[1px] border-zinc-700 pb-8">
              Connect with me
            </h1>
            <div className="flex items-center space-x-4 text-base sm:text-xl text-zinc-200 tracking-wide">
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
