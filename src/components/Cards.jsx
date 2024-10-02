import { useState } from "react";
import braneImg from "../assets/images/brane.png";
import citymallImg from "../assets/images/citymall.png";
import iitrImg from "../assets/images/iitr.png";

function Cards() {
  const [showDescription, setShowDescription] = useState(null); // Changed to store card identifier

  const handleShowDescription = (id) => {
    setShowDescription(showDescription === id ? null : id); // Toggle logic based on id
    console.log(showDescription);
  };

  const handleMouseLeave = () => {
    setShowDescription(null); // Reset on mouse leave
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.4"
      className="container w-full sm:pt-20 pt-10 bg-[#E3E3DE] "
    >
      <div className="w-full border-b-[1px] border-zinc-700 pb-5 text-black">
        <h1 className="text-4xl sm:text-6xl">
          Experience <span className="text-2xl">&</span> Education
        </h1>
      </div>
      <div className="container w-full flex flex-col md:flex-row gap-5 py-20 text-[#E3E3DE]">
        <div
          className="cursor-pointer hover:scale-105 transition-all duration-300 card relative flex flex-col gap-5  items-center py-12 lg:w-1/2 md:w-full h-80 md:h-96 bg-[#35008B] rounded-xl "
          onMouseEnter={() => handleShowDescription("brane")}
          onMouseLeave={handleMouseLeave} // Reset on mouse leave
        >
          <img
            src={braneImg}
            alt="BRANE ENTERPISES"
            className="w-[25%] h-auto object-contain"
          />{" "}
          <p className="text-lg -mt-1 sm:mt-0 font-semibold">
            Software Developer(ASL)
          </p>{" "}
          <p
            className={`text-md -mt-4 sm:mt-0 px-5 lg:px-12 leading-6 lg:leading-7 transition-opacity duration-500 ${showDescription === "brane" ? "opacity-100" : "opacity-0"}`}
          >
            {/* Added animation on hover */}
            Led development on the NSL platform and Stringer Chatbot, optimizing
            APIs and enhancing UX with ReactJS, RESTful APIs, and batch
            processing.
          </p>
          <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
            2024
          </button>
        </div>
        <div
          className="cursor-pointer hover:scale-105 lg:w-1/2 w-full transition-all duration-300 card relative flex flex-col gap-5 items-center py-12 h-80 md:h-96 bg-[#E71053] rounded-xl"
          onMouseEnter={() => handleShowDescription("citymall")}
          onMouseLeave={handleMouseLeave} // Reset on mouse leave
        >
          <img
            src={citymallImg}
            alt="CITYMALL"
            className="w-[25%] h-auto object-contain"
          />
          <p className="text-lg -mt-1 sm:mt-0 font-semibold">
            Software Engineer
          </p>{" "}
          <p
            className={`text-md px-5 -mt-4 sm:mt-0 lg:px-12 leading-6 lg:leading-7 transition-opacity duration-500 ${showDescription === "citymall" ? "opacity-100" : "opacity-0"}`}
          >
            {/* Added animation on hover */}
            Developed responsive UI for WMS using React Native, implemented
            delivery route optimization, and reduced bugs through thorough code
            reviews.
          </p>
          <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
            2023
          </button>
        </div>
        <div className="cursor-pointer hover:scale-105  lg:w-1/4 w-full  transition-all duration-300card relative flex flex-col gap-5 items-center py-12 h-80 md:h-96 bg-[#293231] rounded-xl">
          <img
            src={iitrImg}
            alt="IITR"
            className="w-[25%] md:w-[50%] h-auto object-contain"
          />
          <p className="text-lg font-semibold -mb-3">B. Tech.</p>
          <p className="text-md">CGPA : 8.3</p>
          <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
            2019-2023
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
