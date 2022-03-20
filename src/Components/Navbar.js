import { AiFillGithub } from "react-icons/ai";
import { GoLightBulb } from "react-icons/go";
export default function Navbar() {
  return (
    <header
      className="flex flex-row justify-between h-[180px] 
                    w-full bg-[#8AAAE5] items-center font-Lato shadow-xl text-white"
    >
      <div className="flex flex-row items-center ml-5 ">
        {/* <img
          src="./me.png"
          alt="Me"
          className="drop-shadow-l h-[120px] border-2 rounded-full drop-shadow-xl"
        /> */}
        <h1 className="text-4xl font-bold drop-shadow-xl">Dev. LOGO</h1>
      </div>
      <div className="flex flex-cols space-x-8 text-2xl">
        <a
          href="./index"
          className="px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  
                        duration-300 hover:bg-slate-50/25 rounded-xl drop-shadow-md"
        >
          Home
        </a>
        {/* <a
          href="./index"
          className="px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  
                        duration-300 hover:bg-slate-50/25 rounded-xl drop-shadow-md"
        >
          About
        </a> */}
        <a
          href="./index"
          className="px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  
                        duration-300 hover:bg-slate-50/25 rounded-xl drop-shadow-md"
        >
          Projects
        </a>
        <a
          href="./index"
          className="px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  
                        duration-300 hover:bg-slate-50/25 rounded-xl drop-shadow-md"
        >
          Contact
        </a>
      </div>
      <div className="flex flex-cols space-x-2 items-center mr-8 text-4xl">
        <button type="button">
          <GoLightBulb />
        </button>
        <a href="https://github.com/AdrianBonea/portofolio">
          <AiFillGithub />
        </a>
      </div>
    </header>
  );
}
