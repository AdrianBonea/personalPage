import { IoCodeSlash, IoCode } from "react-icons/io5";
import {
  SiTailwindcss,
  SiReact,
  SiMysql,
  SiJavascript,
  SiCss3,
  SiHtml5,
} from "react-icons/si";

export default function About() {
  return (
    <section className="my-[27vh] font-Lato w-full h-[400px] flex flex-col justify-center bg-[#8AAAE5]/50">
      <h1
        className="flex justify-center text-5xl  
                     py-3 drop-shadow font-bold border-solid"
      >
        <IoCode />
        &nbsp; About me &nbsp;
        <IoCodeSlash />
      </h1>
      <p
        className="indent-7 flex justify-center py-5 bg-[#8AAAE5] 
                    shadow-xl font-light text-black rounded-sm"
      >
        Hello, my name is Adrian , I'm enthusiastic, focused, and motivated to
        achieve my goals.
        <br /> Currently, I am working in Finance, but in the last year, I
        prepared myself to change my career path into <br />
        Tech Industry. Dedicated and hardworking with internal drive to deliver.
      </p>

      <h1
        className="flex justify-center text-5xl  
                      py-5 drop-shadow font-bold border-solid"
      >
        <IoCode />
        &nbsp; My stack &nbsp;
        <IoCodeSlash />
      </h1>
      <div className="flex cols justify-center gap-5 ">
        <div
          className="bg-[#8AAAE5] grid grid-cols-1 
                        place-items-center py-3 text-xl w-28 rounded-3xl shadow-lg "
        >
          <SiReact />
          <p>React</p>
        </div>
        <div
          className="bg-[#8AAAE5] grid grid-cols-1 
                         place-items-center py-3 text-xl w-28 rounded-3xl shadow-lg"
        >
          <SiTailwindcss />
          <p>TailwindCSS</p>
        </div>
        <div
          className="bg-[#8AAAE5] grid grid-cols-1 
                       place-items-center py-3 text-xl w-28 rounded-3xl shadow-lg"
        >
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div
          className="bg-[#8AAAE5] grid grid-cols-1 
                     place-items-center py-3 text-xl w-28 rounded-3xl shadow-lg"
        >
          <SiMysql />
          <p>MySQL</p>
        </div>
        <div
          className="bg-[#8AAAE5] grid grid-cols-1 
                       place-items-center py-3 text-xl w-28 rounded-3xl shadow-lg"
        >
          <SiCss3 />
          <p>CSS</p>
        </div>
        <div className="bg-[#8AAAE5] grid grid-cols-1 place-items-center py-3 text-xl w-28 rounded-3xl shadow-lg">
          <SiHtml5 />
          <p>HTML</p>
        </div>
      </div>
    </section>
  );
}
