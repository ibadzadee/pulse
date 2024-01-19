menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
  menu.ClassList.add("toggle");
});

const section = document.querySelector("#ourmenu .bottom");

// let url = `http://localhost:3000/data/`;
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
let filterArr = [];
let coppy = [];

async function getAll() {
  let res = await axios.get(url);
  let data = res.data;
  coppy = data;

  section.innerHTML = "";

  filterArr = filterArr.length || searchInp.value ? filterArr : data;
  filterArr.forEach((element) => {
        section.innerHTML +=`
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

searchInp.addEventListener("input", () => {
  if (e.target.value) {
    filterArr.filter((element) => {
      return element.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
  }
  getAll();
});
