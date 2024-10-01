import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

function Navbar() {
  const scrollRef = useRef(null);

  const navLinks = [
    { name: "Work", path: "#work" },
    {
      name: "Resume",
      path: "https://drive.google.com/drive/folders/1qftTPshdl7w1ToECRNmCQ07KGaDTx_0i",
    },
  ];

  useEffect(() => {
    if (!scrollRef.current) {
      scrollRef.current = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        multiplier: 1,
        class: "is-revealed",
      });
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, []);

  const handleWorkClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector("#work");
    if (targetElement && scrollRef.current) {
      scrollRef.current.scrollTo(targetElement);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (scrollRef.current) {
      scrollRef.current.scrollTo("top", {
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    }
  };

  return (
    <div className="sticky bg-zinc-900/40 backdrop-blur-md top-0 z-[999] py-4 sm:py-5">
      <div className="container w-full font-NueueMontreal flex items-center justify-between">
        <a onClick={handleLogoClick}>
          <div className="logo">
            <h2 className="text-2xl font-bold">gurkaran</h2>
          </div>
        </a>
        <div className="links items-center gap-10 flex">
          {navLinks.map((item, index) =>
            item.name === "Work" ? (
              <a
                key={index}
                href={item.path}
                onClick={handleWorkClick}
                className="text-md font-light capitalize whitespace-nowrap cursor-pointer"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={index}
                to={item.path}
                className="text-md font-light capitalize whitespace-nowrap cursor-pointer"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
