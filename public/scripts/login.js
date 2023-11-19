// make a auth system with local storage for saving the username,password,isLoggedIn as a user object

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const main = document.getElementById("main");
const msgEl = document.getElementById("msg");

// Check the user is logged in and show the profile
const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
	msgEl.textContent = "You are not registered. Redirecting to register page";
	setTimeout(() => {
		window.location.href = "register.html";
	}, 1000);
} else if (user.isLoggedIn === false) {
	msgEl.textContent = "You are not logged in";
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
	loginUser();
});

async function loginUser() {
	const savedUser = JSON.parse(localStorage.getItem("user"));
	if (!savedUser) return;

	const user = {
		username: username.value,
		password: password.value,
		isLoggedIn: false,
	};

	if (user.username !== savedUser.username) {
		msgEl.textContent = "Invalid username";
	} else if (user.password !== savedUser.password) {
		msgEl.textContent = "Invalid password";
	}

	// check if the saved is same as the input

	if (
		savedUser.username === user.username &&
		savedUser.password === user.password
	) {
		user.isLoggedIn = true;
		saveUserToLocalStorage(user);

		// clear the form
		form.reset();
		// show a success message
		msgEl.textContent = "Logged in successfully. Redirecting to dashboard";
		// redirect to dashboard
		setTimeout(() => {
			window.location.href = "dashboard.html";
		}, 3000);
	}
}

function saveUserToLocalStorage(user) {
	localStorage.setItem("user", JSON.stringify(user));
}
