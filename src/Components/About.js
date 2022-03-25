export default function About() {
  return (
    <section
      className=" bg-[#373e98] h-auto w-full flex justify-center pb-10 "
      id="about"
    >
      <div className="flex flex-col">
        <div className="flex w-auto bg-[#ceb92c]">
          <div className="text-[#373e98] font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#373e98"
                fillOpacity="1"
                d="M0,96L1440,256L1440,0L0,0Z"
              ></path>
            </svg>
            <div>
              <span className="text-4xl font-bold ml-4">./about/tech</span>
            </div>
            <aside className="text-lg max-w-[82ch] p-5">
              I am a self-taught developer with a strong will to succeded in my
              new path. Keep scrolling if you wana know me better.
            </aside>
            <aside className="text-2xl px-5 font-bold">
              What is my tech stack?
            </aside>
            <aside className="text-xl max-w-[70ch] pl-5 pt-1 pb-1 font-bold">
              Languages
            </aside>
            <div className="flex flex-row pl-5 ">
              <span className="mr-5 px-3 py-1 bg-[#373e98] text-[#ceb92c] rounded">
                JavaScript
              </span>
              <span className="mr-5 px-3 py-1 bg-[#373e98] text-[#ceb92c] rounded">
                CSS3
              </span>
              <span className="mr-5 px-3 py-1 bg-[#373e98] text-[#ceb92c] rounded">
                HTML
              </span>
              <span className="mr-5 px-3 py-1 bg-[#373e98] text-[#ceb92c] rounded">
                MySQL
              </span>
            </div>
            <aside className="text-xl max-w-[70ch] pl-5 pt-1 pb-1 font-bold">
              Frameworks &amp; tools
            </aside>
            <div className="flex flex-row pl-5 ">
              <span className="mr-5 px-3 py-1 bg-[#373e98] text-[#ceb92c] rounded">
                React.js
              </span>
              <span className="mr-5 px-3 py-1 bg-[#373e98] text-[#ceb92c] rounded">
                TailwindCSS
              </span>
              <span className="mr-5 px-3 py-1 bg-[#373e98] text-[#ceb92c] rounded">
                github
              </span>
            </div>{" "}
            <aside className="text-xl max-w-[70ch] pl-5 pt-1 pb-1 font-bold">
              Other cool stuff
            </aside>
            <div className="flex flex-row pl-5 mb-5">
              <span className="mr-5 px-3 py-1 bg-[#373e98] text-[#ceb92c] rounded">
                VSCode
              </span>
              <span className="mr-5 px-3 py-1 bg-[#373e98] text-[#ceb92c] rounded">
                Prettier
              </span>
              <span className="mr-5 px-3 py-1 bg-[#373e98] text-[#ceb92c] rounded">
                Figma
              </span>
              <span className="mr-5 px-3 py-1 bg-[#373e98] text-[#ceb92c] rounded">
                PopSQL
              </span>
              <span className="mr-5 px-3 py-1 bg-[#373e98] text-[#ceb92c] rounded">
                Tabnine
              </span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#f16775"
                fillOpacity="1"
                d="M0,96L1440,256L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="pt-10 bg-[#f16775] text-#373e98 px-5">
          <span className="text-4xl font-bold text-[#2a2a2a]">
            ./about/experience
          </span>
          <div className="my-5 mx-5 ">
            <ol className="relative border-l border-[#2a2a2a] ">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-[#2a2a2a] rounded-full mt-1.5 -left-1.5 border border-[#2a2a2a]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-[#2a2a2a]">
                  June-September 2018
                </time>
                <h3 className="text-lg font-bold text-[#2a2a2a] drop-shadow-sm">
                  Junior accountant at Eurolines
                </h3>
                <ul className="mb-4 ml-4 text-base font-normal text-[#2a2a2a]/70 max-w-[52ch] list-disc">
                  <li>
                    Help the team to transition from old methodsusing paper to
                    digital.
                  </li>
                  <li>Record invoices in the system.</li>
                </ul>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-[#2a2a2a] rounded-full mt-1.5 -left-1.5 border border-[#2a2a2a]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-[#2a2a2a] ">
                  June 2019
                </time>
                <h3 className="text-lg font-bold text-[#2a2a2a] drop-shadow-sm">
                  Graduate Bucharest University of Economic Studies
                </h3>
                <p className="mb-4 text-base font-normal text-[#2a2a2a]/70 max-w-[60ch]">
                  BCs. in Accounting and Information Technology
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-[#2a2a2a] rounded-full mt-1.5 -left-1.5 border border-[#2a2a2a]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-[#2a2a2a] ">
                  September 2019
                </time>
                <h3 className="text-lg font-bold text-[#2a2a2a] drop-shadow-sm">
                  Audit Analyst at Deloitte
                </h3>
                <ul className="mb-4 ml-4 text-base font-normal text-[#2a2a2a]/70 max-w-[52ch] list-disc">
                  <li>Provide our clients with the best auditprocedures.</li>
                  <li>
                    Help with creating and upgrading complex Excel templates.
                  </li>
                  <li>Helding training constantly for the newjoiners.</li>
                </ul>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-[#2a2a2a] rounded-full mt-1.5 -left-1.5 border border-[#2a2a2a]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-[#2a2a2a] ">
                  August 2021
                </time>
                <h3 className="text-lg font-bold text-[#2a2a2a] drop-shadow-sm">
                  Begin my self learning path
                </h3>
                <p className="mb-4 text-base font-normal text-[#2a2a2a]/70 max-w-[60ch]">
                  Started with with{" "}
                  <a
                    href="https://www.freecodecamp.org/learn/"
                    className="underline"
                  >
                    freeCodeCamp{" "}
                  </a>
                  and evolving since then.
                </p>
              </li>
            </ol>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f16775"
            fillOpacity="1"
            d="M0,96L1440,256L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
