menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
  menu.ClassList.add("toggle");
});

const section = document.querySelector("#ourmenu .bottom");

let url = `http://localhost:3000/data/`;
// fetch(url)
// .then((resp) =>resp.json()
// .then((data) => {
//     data.forEach((element) => {
//       section.innerHTML += `
//         <div class="menu-item">
//         <h3>${element.name}</h3>
//         <div class="description">
//           <p>${element.description}</p>
//           <div class="price">$${element.cost}</div>
//         </div>
//       </div>
//         `;
//     });
//   })
// );

// -------------------search-sort ----------

let searchInp = document.querySelector("#search");
let sort = document.querySelector("#sort");
let filterArr = [];
let coppyArr = [];

async function getAll() {
  let res = await axios.get(url);
  let data = await res.data;
  coppyArr = data;
  section.innerHTML = "";
  filterArr = filterArr.length || searchInp.value ? filterArr : data;
  filterArr.forEach((element) => {
    section.innerHTML += `
        <div class="menu-item">
        <h3>${element.name}</h3>
        <div class="description">
          <p>${element.description}</p>
          <div class="price">$${element.cost}</div>
        </div>
      </div>
        `
  });
}
getAll();

searchInp.addEventListener("input", (e) => {
  filterArr = coppyArr;
  filterArr = filterArr.filter((element) => {
    return element.name.toLowerCase().includes(e.target.value.toLowerCase());
  });
  getAll();
});


sort.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.value === "za") {
    filterArr = filterArr.sort((a, b) => b.cost - a.cost);
  }
  else if (e.target.value === "az") {
    filterArr = filterArr.sort((a, b) => b.cost - a.cost);
  }
  else {
    filterArr = []
  }
  console.log(filterArr);
  getAll();
});
