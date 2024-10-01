import braneImg from "../assets/images/brane.png";
import citymallImg from "../assets/images/citymall.png";
import iitrImg from "../assets/images/iitr.png";
function Cards() {
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
      <div className="container w-full flex flex-col md:flex-row gap-5 py-20">
        <div className="hover:scale-105 transition-all duration-300 card relative flex flex-col gap-5  items-center justify-center lg:w-1/2 md:w-full h-96 bg-[#35008B] rounded-xl">
          <img src={braneImg} alt="BRANE ENTERPISES" className="w-[25%]" />{" "}
          <p className="text-sm">Software Developer(ASL)</p>
          <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
            2024
          </button>
        </div>
        <div className="cardcontainer flex gap-5 lg:w-1/2 md:w-full">
          <div className="hover:scale-105 transition-all duration-300card relative flex flex-col gap-5 items-center justify-center w-1/2 h-96 bg-[#E71053] rounded-xl">
            <img src={citymallImg} alt="CITYMALL" className="w-[50%]" />
            <p className="text-sm">SDE-1</p>
            <button className="absolute bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
              2023
            </button>
          </div>
          <div className="hover:scale-105 transition-all duration-300card relative flex flex-col gap-5 items-center justify-center w-1/2 h-96 bg-[#293231] rounded-xl">
            <img
              src={iitrImg}
              alt="IITR"
              className="w-[50%] mix-blend-lighten"
            />
            <p className="text-sm text-center">B. Tech.</p>
            <p className="text-sm">CGPA : 8.3</p>
            <button className="absolute bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
              2019–2023
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
