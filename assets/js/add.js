const table = document.querySelector("#table tbody");

let url = `http://localhost:3000/data/`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.forEach((element) => {
      table.innerHTML += `
        <tr>
        <th>${element.id}</th>
        <th>${element.name}</th>
        <th>${element.description}</th>
        <th>${element.cost}</th>
        <th>
        <button onclick="deleteData(${element.id})">Delete</button>
        </th>
    </tr>
        `;
    });
  });

function deleteData(id) {
  axios.delete(url+id);
  alert('Delete data successfully!')
  window.location.reload();
}

// ------------------ ADD ------------------

const form = document.querySelector("#form")
const nameInp = document.querySelector("#name")
const descriptionInp = document.querySelector("#description")
const costInp = document.querySelector("#cost")

form.addEventListener("submit" , (e)=>{
    e.preventDefault()
    let obj = {
        name: nameInp.value,
        description: descriptionInp.value,
        cost:costInp.value
    }
    axios.post(url, obj).then(res =>{
        alert("Success!")
        window.location.reload();
    })
})
