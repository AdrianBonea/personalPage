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
    <section className="py-40 font-Lato w-full flex flex-col divide-black">
      <h1
        className="flex justify-center text-5xl  
                      py-3 drop-shadow font-bold border-solid"
      >
        <IoCode />
        &nbsp; About me &nbsp;
        <IoCodeSlash />
      </h1>
      <p
        className="indent-7 flex justify-center py-3 bg-[#8AAAE5]/90 
                    shadow-xl font-light text-black"
      >
        Hello, my name is Adrian , I'm enthusiastic, focused, and motivated to
        achieve my goals.
        <br /> Currently, I am working in Finance, but in the last year, I
        prepared myself to change my career path into <br />
        Tech Industry. Dedicated and hardworking with internal drive to deliver.
      </p>

      <h1
        className="flex justify-center text-5xl  
                      py-3 drop-shadow font-bold border-solid"
      >
        <IoCode />
        &nbsp; My stack &nbsp;
        <IoCodeSlash />
      </h1>
      <div className="flex cols justify-center gap-5">
        <div className="">
          <SiReact />
          <p>React</p>
        </div>
        <div>
          <SiTailwindcss />
          <p>TailwindCSS</p>
        </div>
        <div>
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div>
          <SiMysql />
          <p>MySQL</p>
        </div>
        <div>
          <SiCss3 />
          <p>CSS</p>
        </div>
        <div>
          <SiHtml5 />
          <p>HTML</p>
        </div>
      </div>
    </section>
  );
}
