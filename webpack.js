const form_control1 = document.getElementById("form_control1");
const form_control2 = document.getElementById("form_control2");
const searchButton = document.getElementById("btnradio2");
const clearButton = document.getElementById("btnradio1");
const fromCountry = document.getElementById("formGroupExampleInput");
const toCountry = document.getElementById("formGroupExampleInput2");

const currentDate = new Date();
console.log(currentDate);


const fetchrequest1 = (queryText) => {
    const url = `https: //namaztimes.kz/ru/api/country?query=${queryText}&per_page=40&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;

    fetch(url)
        .then(response => response.json)
        .then(data => getCountry(data))
        .catch(console.log("Uncorrect data"))
        .finally(console.log("Please check out your data"));
}


searchButton.addEventListener("click", (event) => {
    if (event.key === "Enter") {
        const queryText = document.querySelector("#fromCountry").value;
        fetchrequest1(queryText);
    }
});



searchButton.addEventListener("click", () => {
    const sD = form_control1.value;
    const startDate = new Date(sD);
    console.log(startDate);
    // currentDate.getTime() <= startDate.getTime() ? console.log("Correct date") : console.log("Uncorrect date");
})

searchButton.addEventListener("click", () => {
    const eD = form_control2.value;
    const endDate = new Date(eD);
    console.log(endDate);
    // endDate.getTime() >= currentDate.getTime() ? console.log("Correct date") : console.log("Uncorrect date");
})

clearButton.addEventListener("click", () => {
    form_control1.value = "";
    form_control2.value = "";
})



// const prov = () => {
//     // const uncorrDate = document.getElementById("form_control1").value;
//     // if (uncorrDate.length != 0) {
//     //     searchButton.disabled;
//     // }
//     if (form_control1.value.length != 0 || form_control2.value.length != 0) {
//         searchButton.disabled;
//     }
// }

console.log(prov());

const getCountry = (data) => {
    for (let i = 0; i < data.results.length; i++) {
        const dropdownMenu = document.createElement("a");
        dropdownMenu.src = data.results[i].urls.raw;
        const src = document.getElementById("dropdown_item")
        src.appendChild(img);

        dropdownMenu.addEventListener("dblclick", () => {
            window.open(data.results[i].links.download, "_blank");
        })
    }
}




// const checkLength = function(evt) {
//     if ((form_control1 && form_control2)) {
//         searchButton.removeAttribute("disabled");
//     }
// }

// console.log(checkLength())