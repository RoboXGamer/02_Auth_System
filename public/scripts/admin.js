// Unregister user

const user = JSON.parse(localStorage.getItem("user"));
const unregisterBtn = document.getElementById("unregister");

unregisterBtn.addEventListener("click", () => {
	localStorage.removeItem("user");
});
