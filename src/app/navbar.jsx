const axios = require("axios").default;

let searchable = [];

async function RenderData() {
  const token = "$2b$10$vyWUBnIw88o61c0GvXnaEeyjLjztHutiacsy6LFdvSqlQfL/GvJjW";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  await axios
    .get("http://localhost:3100/technologies", config)

    .then(function (response) {
      const techArr = response.data;
      for (let i in techArr) {
        searchable.push(techArr[i].name);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function eventos() {
  const searchInput = document.getElementById("search");
  let results = [];
  let input = searchInput.value;

  if (input.length) {
    //alert(input);
    document.getElementById("options").style.visibility = "visible";
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
    renderResults(results);
  } else {
    document.getElementById("options").style.visibility = "hidden";
  }
}

function renderResults(results) {
  const options = document.getElementById("options");
  let content = "";

  for (let i in results) {
    content += `<li><a href="http://localhost:3000/jobs?element=${results[i]}">${results[i]}</a></li>`;
  }
  options.innerHTML = `<ul>${content}</ul>`;
}

export function MyNavbar() {
  RenderData();
  return (
    <div className="container col-lg-12">
      <div className="wrapper">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Jobs"
          autoComplete="chrome-off"
          className="form-control "
          onKeyUp={eventos}
        />

        <div
          className="container col-lg-11"
          id="options"
          style={{
            position: "absolute",
            color: "black",
            backgroundColor: "white",
            listStyleType: "none",
          }}
        ></div>
      </div>
    </div>
  );
}
