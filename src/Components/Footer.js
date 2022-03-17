import React from "react";

export default function Footer() {
  const [repos, setRepos] = React.useState([
    {
      name: "",
      description: "",
      url: "",
    },
  ]);

  const [allRepos, setAllRepos] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https:api.github.com/search/repositories?q=org:AdrianBonea&sort=updated&order=desc&limit=6"
    )
      .then((res) => res.json())
      .then((data) => setAllRepos(data.items))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <footer className="absolute bottom-0">
      <div>
        {repos && (
          <ul>
            {allRepos.slice(0, 5).map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
