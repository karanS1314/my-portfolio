import Logo from "../assets/logo.svg";

function Navbar() {
  const navLinks = ["About", "Work", "Resume"];
  return (
    <div className="sticky bg-zinc-900/40 backdrop-blur-md top-0 z-[999] py-4 sm:py-5">
      <div className="container w-full font-NueueMontreal flex items-center justify-between">
        <div className="logo">
          <img src={Logo} className="w-12" alt="ochi logo" />
        </div>
        <div className="links items-center gap-10 flex">
          {navLinks.map((item, index) => (
            <a
              key={index}
              className="text-md font-light capitalize whitespace-nowrap cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
