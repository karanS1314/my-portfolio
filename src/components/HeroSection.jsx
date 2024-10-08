import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function HeroSection() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      id="hero"
      className="container w-full"
    >
      <div className="textstructure py-[10vh]">
        {["GURKARAN SINGH", "FULL-STACK", "DEVELOPER"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-center overflow-hidden tracking-widest text-[#E3E3DE]">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "16vw" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 1,
                    delay: 1,
                  }}
                  className="w-[8vw] h-[5vh] sm:h-[6vh] sm:w-[5vw] sm:mt-5 mr-5 rounded-md bg-green-500"
                ></motion.div>
              )}
              <h1
                key={index}
                className="font-FoundersGroteskCondensed sm:-mb-[1vw] md:text-[9vw] sm:text-[12vw] text-[16vw] uppercase whitespace-nowrap leading-none h-full"
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t-[1px] border-zinc-800 py-5 font-NueueMontreal">
        {[
          "Creating impactful software solutions",
          "Worked with startups and product based companies",
        ].map((item, index) => (
          <p
            key={index}
            className="text-base font-light leading-none hidden sm:block"
          >
            {item}
          </p>
        ))}
        <a href="mailto:gurkaran1314@gmail.com">
          <div className="hover:bg-white/10 start cursor-pointer flex items-center gap-4 rounded-full border-[1px] border-zinc-500">
            <div className="font-NueueMontreal border-zinc-500 px-5 py-2 text-sm font-light whitespace-nowrap uppercase">
              Connect with me
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-zinc-500">
              <span className="rotate-45">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
