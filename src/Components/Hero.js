import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function MainContent() {
  return (
    <section className="mt-[120px] bg-white container mx-auto font-Lato w-auto">
      <div className="flex flex-wrap ">
        <div className="leading-[60px] z-10 text-justify ">
          <RoughNotationGroup show={true}>
            <RoughNotation
              className=" ml-20 text-6xl font-bold inline-block"
              type="highlight"
              order="2"
              color="#8AAAE5"
            >
              Hello World!
            </RoughNotation>
            <br />
            <RoughNotation
              className="ml-20 text-4xl inline-block"
              type="highlight"
              order="1"
              color="#8AAAE5"
            >
              My name is{" "}
              <RoughNotation
                type="circle"
                order="3"
                color="red"
                strokeWidth="2"
              >
                Bonea Adrian
              </RoughNotation>
              .
            </RoughNotation>
            <br />
            <RoughNotation
              className="ml-20 text-4xl inline-block"
              type="highlight"
              order="1"
              color="#8AAAE5"
            >
              I am a{" "}
              <RoughNotation
                type="underline"
                order="2"
                color="yellow"
                strokeWidth="3"
              >
                Front End Developer{" "}
              </RoughNotation>
              and here is my{" "}
              <RoughNotation
                type="box"
                order="4"
                color="purple"
                strokeWidth="2"
              >
                portofolio
              </RoughNotation>{" "}
              .
            </RoughNotation>
            <br />
            <RoughNotation
              className="ml-20 text-4xl"
              type="highlight"
              order="2"
              color="#8AAAE5"
            >
              Have a look!
            </RoughNotation>
          </RoughNotationGroup>
        </div>
        <div className="z-0">
          <img
            src="./me-bw.png"
            className="z-0 relative drop-shadow-xl -mr-10"
          ></img>
        </div>
      </div>
    </section>
  );
}
