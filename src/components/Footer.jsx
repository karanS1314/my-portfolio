import Logo from "../assets/logo.svg";
import { FaArrowUpLong } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full h-fit">
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
            <h1 className="font-NueueMontreal text-3xl md:text-4xl mb-4 border-b-[1px] border-zinc-700 pb-4">
              Connect with me
            </h1>
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
              (item, index) => (
                <a
                  className="flex items-center gap-2 underline underline-offset-4 decoration-slate-500"
                  key={index}
                >
                  {item}{" "}
                  <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px] text-sm text-zinc-500" />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
