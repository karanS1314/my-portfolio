import { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      // Mouse position from the window
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Mouse position from the center of the window
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // Calculate the angle (convert from radians to degrees) => 1 radian = 180 / Math.PI
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      // Update the rotation
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-[300px] sm:h-[600px] overflow-hidden bg-black">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.2"
        className="w-full relative h-[300px] sm:h-[600px] bg-cover bg-center bg-[#E3E3DE] items-center"
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[24vw] md:w-[15vw] h-[24vw] md:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[24vw] md:w-[15vw] h-[24vw] md:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
