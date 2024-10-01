import { motion, useAnimation } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import bidoraImg from "../assets/images/bidora.png";
import edlabImg from "../assets/images/edlab.png";
function Featured() {
  // array to animate two cards
  const cards = [useAnimation(), useAnimation()];
  // receives index and animates that card only
  const handleHoverStart = (index) => {
    cards[index].start({
      y: "0",
    });
    cards[1 - index].start({ y: "100%" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
    cards[1 - index].start({ y: "100%" });
  };
  return (
    <div className="container w-full sm:pt-20 pt-10 text-[#E3E3DE]">
      <div className="w-full border-b-[1px] border-zinc-700 pb-5">
        <h1 className="text-4xl sm:text-6xl">Featured Projects</h1>
      </div>
      <div className="py-10 cards w-full flex flex-col md:flex-row gap-10">
        <motion.div
          onHoverStart={() => handleHoverStart(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> BIDORA -
            Online Auction App
          </h1>
          <h1 className="absolute text-purple-500 flex overflow-hidden left-1/2 sm:left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"BIDORA".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-all border-[2px] border-purple-500 rounded-xl"
              src={bidoraImg}
              alt="bidora"
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHoverStart(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> EDLAB -
            E-Learning Platform
          </h1>
          <h1 className="absolute flex overflow-hidden text-blue-500 right-1/2 sm:right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"EDLAB".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-all border-[2px] border-blue-500 rounded-xl"
              src={edlabImg}
              alt="edlab"
            />
          </div>
        </motion.div>
      </div>
      <div className="m-auto font-semibold rounded-full gap-1 justify-center w-fit bg-[#E3E3DE] font-NueueMontreal text-black px-10 py-3 text-sm tracking-wider uppercase">
        Learning Projects
      </div>
      <div className="w-full flex py-6 flex-col md:flex-row justify items-center justify-center">
        <div className="w-full h-[50px] flex flex-row items-center justify-center">
          <h1 className="flex flex-row items-center gap-1 hover:underline underline-offset-4 decoration-zinc-500 hover:scale-105 transition-all">
            <a href="https://leetcode.com/u/gurkaran_s/">Algo-Visualizer</a>
            <FaArrowUpLong className="rotate-45 origin-center text-lg" />
          </h1>
        </div>
        <div className="w-full h-[50px] flex items-center justify-center">
          <h1 className="flex flex-row items-center gap-1 hover:underline underline-offset-4 decoration-zinc-500 hover:scale-105 transition-all">
            <a href="https://leetcode.com/u/gurkaran_s/">
              Valowar - Esports Tournament App
            </a>
            <FaArrowUpLong className="rotate-45 origin-center text-lg" />
          </h1>
        </div>
        <div className="w-full h-[50px] flex items-center justify-center">
          <h1 className="flex flex-row items-center gap-1 hover:underline underline-offset-4 decoration-zinc-500 hover:scale-105 transition-all">
            <a href="https://leetcode.com/u/gurkaran_s/">Blog Management App</a>
            <FaArrowUpLong className="rotate-45 origin-center text-lg" />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Featured;
