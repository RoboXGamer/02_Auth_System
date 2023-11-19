// Check the user is logged in and show the profile

const main = document.getElementById("main");
const msgEl = document.getElementById("msg");

const user = JSON.parse(localStorage.getItem("user"));

if (user.isLoggedIn === false) {
	msgEl.textContent = "You are not logged in";
} else {
	msgEl.textContent = `Welcome, ${user.username}!`;
}

const logoutBtn = document.getElementById("logout");

if (user.isLoggedIn === false) {
	logoutBtn.style.display = "none";
}

logoutBtn.addEventListener("click", () => {
	user.isLoggedIn = false;
	localStorage.setItem("user", JSON.stringify(user));

	window.location.reload();
});
