import { Tab } from "@headlessui/react";

export default function About() {
  return (
    <section
      className=" bg-[#373e98] h-auto w-full flex justify-center pb-10"
      id="about"
    >
      <div className="flex flex-col">
        <div className="flex w-auto bg-[#ceb92c]">
          <div className="text-[#373e98] font-bold">
            <div>
              <span className="text-4xl font-bold  ml-4">./about/tech</span>
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
              Frameworks & tools
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
          </div>
        </div>
        <div className="pt-10 bg-[#f16775] text-[#373e98] px-5">
          <span className="text-4xl font-bold">./about/experience</span>
          <div className="my-5 mx-5 ">
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  February 2022
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Application UI code in Tailwind CSS
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &amp;
                  Marketing pages.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more{" "}
                  <svg
                    class="ml-2 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  March 2022
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Marketing UI design in Figma
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </li>
              <li class="ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  April 2022
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  E-Commerce UI code in Tailwind CSS
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
