import TypeAnimation from "react-type-animation";

export default function MainContent() {
  return (
    <section className="bg-[#373e98] h-[100vh] w-full">
      <div className="pt-[10vh] container mx-auto font-Lato w-auto">
        <div className="flex flex-wrap justify-center">
          <div className="leading-[5px] text-justify text-white">
            <h1 className="flex flex-row ml-20 text-5xl ">
              <span className="link link-underline link-underline-black">
                Hello
              </span>
              , my name is &nbsp;
              <TypeAnimation
                cursor={false}
                sequence={["Adrian.", 4000, ""]}
                wrapper="h2"
                repeat={Infinity}
                className="text-[#f16775]"
              />
            </h1>

            <br />
            <h1 className="ml-20 text-2xl inline-block text-[#ceb92c]">
              I am a <span>Front End Developer </span>
              and here is my <span>portofolio</span> .
            </h1>
            <h1 className="ml-20 text-2xl text-[#ceb92c]">Have a look!</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
