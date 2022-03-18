import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

export default function Footer() {
  const [allRepos, setAllRepos] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https:api.github.com/search/repositories?q=org:AdrianBonea&sort=updated&order=desc"
    )
      .then((res) => res.json())
      .then((data) => setAllRepos(data.items))
      .catch((error) => console.log(error.message));
  }, []);

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } // capitalize the first letter

  return (
    <footer
      className="absolute bottom-0 w-full h-[320px] pb-[40px] 
                      bg-[#8AAAE5] text-black flex justify-around font-Lato"
    >
      <div className="absolute bottom-[320px] left-0 text-8xl text-bold text-[#8AAAE5] drop-shadow-lg">
        Latest
      </div>
      <div className="grid grid-cols-5 gap-y-10 gap-x-3 ">
        <span className="row-span-2 text-8xl text-bold text-white drop-shadow-lg">
          Updates
          <BsArrowReturnRight />
        </span>
        {allRepos.slice(0, 4).map((repo) => (
          <a href={repo.html_url} target="_blank">
            <ul
              key={repo.id}
              className="backdrop-blur-xl bg-white/20 w-auto h-full my-3 mr-5 rounded-xl shadow-md "
            >
              <li className="ml-5 pt-8 font-bold text-xl max-h-[260px] underline decoration-pink-500">
                {Capitalize(repo.name)}
              </li>
              <li className="ml-5 line-clamp-5 ">{repo.description}</li>
            </ul>
          </a>
        ))}
      </div>
    </footer>
  );
}
