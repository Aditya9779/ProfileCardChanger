
function getDetails(id) {
    const divElement = document.querySelector("#bodyConvert");
    const request = new XMLHttpRequest();
    request.open("GET", `https://dummyjson.com/users/${id}`);
    request.send();
    request.addEventListener("load", () => {
        const requestData = JSON.parse(request.responseText);
        console.log(requestData);

        const insideHtml = `
            <div class="profileCard">
                <img src="${requestData.image}" alt="Profile Picture" class="profileImg">
                <h2 class="name">Name: ${requestData.firstName} ${requestData.lastName}</h2>
                <h3 class="name"><p class="bio">Gender: ${requestData.gender}</p></h3>
                <p class="title">Department: ${requestData.company.department}</p>
                <p class="bio">College: ${requestData.university}</p>
                <div class="socialLinks">
                    <a href="mailto:${requestData.email}" target="_blank">Email</a>
                </div>
            </div>
        `;
        divElement.insertAdjacentHTML("beforeend", insideHtml);
    });
}

function getRandomNaturalNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

const generateBtn = document.querySelector("#btn");
const resetBtn = document.querySelector("#resBtn");
const bodyConvert = document.querySelector("#bodyConvert");

generateBtn.addEventListener("click", () => {
    const randomId = getRandomNaturalNumber();
    getDetails(randomId);
});

resetBtn.addEventListener("click", () => {
    bodyConvert.innerHTML = '';
});
