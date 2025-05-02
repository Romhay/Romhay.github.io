const username = "Romhay";
const userId = 31938529;
const repoList = document.getElementById("repo-list");

fetch(`https://api.github.com/user/${userId}/repos`)
  .then((response) => response.json())
  .then((repos) => {
    repoList.innerHTML = "";
    repos.forEach((repo) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = repo.html_url;
      link.target = "_blank";
      link.textContent = repo.name;
      li.appendChild(link);
      repoList.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
    repoList.innerHTML = "<li>Unable to load projects at this time.</li>";
  });
