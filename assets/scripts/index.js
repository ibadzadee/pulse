let url = ' http://localhost:3000/data/';
let cards = document.querySelector(".cards");
let searchInp = document.querySelector("#search");
let sort = document.querySelector("#sort");
let filterArr = [];
let coppy = [];

async function getAll(){
    let res = await axios.get(url);
    let data = res.data;
    coppy = data;

    cards.innerHTML = '';

    filterArr = filterArr.length || searchInp.value ? filterArr : data;
    filterArr.forEach(element => {
        cards.innerHTML +=`
        <div class="card">
        <h2>${element.name}</h2>
        <div>
            <i>${element.text}</i>
            <span></span>
            <p>$${element.price}</p>
        </div>
    </div>
        `
    });
}

getAll();

/////Search/////

searchInp.addEventListener("input", (e)=>{
    if(e.target.value){
        filterArr = filterArr.filter((element)=>{
            return element.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        })
    }
    getAll()
});

/////Sort/////

sort.addEventListener("change", (e) => {
    if (e.target.value === "asc") {
        filterArr.sort((a, b) => a.price  - b.price);
    } else if (e.target.value === "des") {
        filterArr.sort((a, b) => b.price  - a.price);
    } else {
        filterArr = coppy;
    }
    getAll();
});
