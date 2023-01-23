const search = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-icon");
let data;

fetch("../../data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    data = jsonData;
  });

searchBtn.addEventListener("click", () => {
  searchValue(search.value);
});

const searchValue = (val) => {
  const filteredJson = data.filter((item) => {
    for (let key in item) {
      if (typeof item[key] === "string" && item[key].includes(val)) {
        return true
      } else if (
        Array.isArray(item[key]) &&
        item[key].join(" ").includes(val)
      ) {
        return true;
      }
    }
  });
  data.forEach((item) => {
    const div = document.getElementById(item.id).style;
    if (filteredJson.includes(item)) {
      div.display = "block";
    } else {
        div.display = "none";
    }
  });

  document.getElementById("search-input").addEventListener("input", (e) => {
    searchValue(e.target.value);
  });
};

// search.addEventListener("input", function() {
//     console.log(search.value);
//
