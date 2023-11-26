const url = "http://universities.hipolabs.com/search?name=";
const countryInput = document.getElementById("countryInput");
const searchBtn = document.getElementById("searchBtn");
const outputList = document.getElementById("output");

searchBtn.addEventListener("click", async () => {
    await searchAndShow();
});

countryInput.addEventListener("keyup", async (event) => {
    if (event.key === "Enter") {
        await searchAndShow();
    }
});

async function searchAndShow() {
    let country = countryInput.value.trim();
    if (country) {
        let colleges = await getColleges(country);
        show(colleges);
        countryInput.value = "";
    }
}

function show(colleges) {
    outputList.innerText = "";
    for (colArr of colleges) {
        console.log(colArr.name);
        let li = document.createElement("li");
        li.innerText = colArr.name;
        outputList.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (err) {
        console.log(err);
        return [];
    }
}