document.getElementById("get-advice").addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
    .then((response)  => response.json())
    .then((data) => {
        document.getElementById("advice").textContent = `${data.slip.advice}`
    })
    .catch((error) => console.log("error fetching advice:" , error));
});