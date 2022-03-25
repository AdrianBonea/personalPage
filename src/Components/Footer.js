import React from "react";

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
    <footer className="inline-block">
      <footer
        className="w-full h-[320px] pb-[40px]  
                      bg-[#373e98] text-white/80 flex justify-around font-Lato"
      >
        <div className="grid grid-cols-5 gap-y-10 gap-x-3 ">
          <div className="flex flex-col text-3xl font-bold pt-8 text-white drop-shadow-md">
            <p>./github/updates</p>
          </div>

          {allRepos.slice(0, 3).map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <ul className="backdrop-blur-xl bg-white/10 w-auto h-full my-3  shadow-md ">
                <li className="ml-5 pt-8 font-bold text-xl max-h-[260px] underline decoration-[#f16775]">
                  {Capitalize(repo.name)}
                </li>
                <li className="ml-5 line-clamp-5 ">{repo.description}</li>
              </ul>
            </a>
          ))}
        </div>
      </footer>
    </footer>
  );
}
