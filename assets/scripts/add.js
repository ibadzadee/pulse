let url = ' http://localhost:3000/data/';

let body = document.querySelector("table tbody");

async function getAll(){
    let res = await axios.get(url);
    let data = await res.data;

    data.forEach(element => {
        body.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.text}</td>
                <td>$${element.price}</td>
                <td><i class="bi bi-trash-fill">Delete</i></td>
            </tr>
        `
    });
}
getAll()