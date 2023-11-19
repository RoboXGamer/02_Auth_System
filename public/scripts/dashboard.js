// Protected route

const msgEl = document.getElementById("msg");
const user = JSON.parse(localStorage.getItem("user"));
if (!user.isLoggedIn) {
	msgEl.textContent = "You are not logged in";
	setTimeout(() => {
		window.location.href = "login.html";
	}, 1000);
}
