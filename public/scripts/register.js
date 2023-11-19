// make a auth system with local storage for saving the username,password,isLoggedIn as a user object

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const main = document.getElementById("main");
const msgEl = document.getElementById("msg");

// Check the user is logged in and show the profile
const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
	msgEl.textContent = "You are not registered";
} else if (user.isLoggedIn === false) {
	msgEl.textContent = "You are already registerd. Redirecting to login page";
	setTimeout(() => {
		window.location.href = "login.html";
	}, 2000);
} else {
	msgEl.textContent = `Already Logged In. Redirecting to dashboard`;
	setTimeout(() => {
		window.location.href = "dashboard.html";
	}, 1000);
}

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
	// prevent the form from submitting
	e.preventDefault();
	registerUser();
});

function registerUser() {
	const user = {
		username: username.value,
		password: password.value,
		isLoggedIn: false,
	};

	saveUserToLocalStorage(user);

	// clear the form
	form.reset();
	// show a success message
	msgEl.textContent = "Registered successfully. Redirecting to login page";
	// redirect to login
	setTimeout(() => {
		window.location.href = "login.html";
	}, 3000);
}

function saveUserToLocalStorage(user) {
	localStorage.setItem("user", JSON.stringify(user));
}
