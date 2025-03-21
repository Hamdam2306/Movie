/////////////////////////// Navbar //////////////////////////////
const navbar: HTMLElement = document.createElement("nav") as HTMLElement;
navbar.className = "flex justify-left items-center w-full bg-gray-100 text-white p-4 shadow-md gap-4";

const h1nav: HTMLElement = document.createElement("h1") as HTMLElement;
h1nav.className = "text-black text-2xl font-bold";
h1nav.textContent = "Vidly";

const loginLink: HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;
loginLink.className = "text-blue-500 font-semibold hover:underline";
loginLink.textContent = "Login";
loginLink.setAttribute("href", "#");

const registerLink: HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;
registerLink.className = "text-blue-500 font-semibold hover:underline";
registerLink.textContent = "Register";
registerLink.setAttribute("href", "#");

navbar.append(h1nav, loginLink, registerLink);
document.body.appendChild(navbar);

/////////////////////////// Login //////////////////////////////

const login: HTMLDivElement = document.createElement("div") as HTMLDivElement;
login.className = "flex flex-col justify-center relative left-[500px] mt-10 p-6 bg-white shadow-md rounded w-96";

const h1login: HTMLElement = document.createElement("h1") as HTMLElement;
h1login.className = "text-2xl font-semibold text-gray-800 mb-4";
h1login.textContent = "Login Page";

const usernameLabel: HTMLElement = document.createElement("label") as HTMLElement;
usernameLabel.className = "block text-gray-700";
usernameLabel.textContent = "Username";

const username: HTMLInputElement = document.createElement("input") as HTMLInputElement;
username.className = "w-full p-2 mb-3 border border-gray-400 rounded";
username.setAttribute("type", "text");
username.setAttribute("placeholder", "Enter your username");

const passwordLabel: HTMLElement = document.createElement("label") as HTMLElement;
passwordLabel.className = "block text-gray-700";
passwordLabel.textContent = "Password";

const password: HTMLInputElement = document.createElement("input") as HTMLInputElement;
password.className = "w-full p-2 mb-3 border border-gray-400 rounded";
password.setAttribute("type", "password");
password.setAttribute("placeholder", "Enter your password");

const loginBtn: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
loginBtn.className = "w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700";
loginBtn.textContent = "Login";

login.append(h1login, usernameLabel, username, passwordLabel, password, loginBtn);
document.body.appendChild(login);


/////////////////////////// Register //////////////////////////////


const register: HTMLDivElement = document.createElement("div") as HTMLDivElement;
register.className = "flex flex-col justify-center relative left-[500px] mt-10 p-6 bg-white shadow-md rounded w-96";
register.style.display = "none";

const h1register: HTMLElement = document.createElement("h1") as HTMLElement;
h1register.className = "text-2xl font-semibold text-gray-800 mb-4";
h1register.textContent = "Register Page";

const usernamelabel: HTMLElement = document.createElement("label") as HTMLElement;
usernamelabel.className = "block text-gray-700";
usernamelabel.textContent = "Username";

const registerUsername: HTMLInputElement = document.createElement("input") as HTMLInputElement;
registerUsername.className = "w-full p-2 mb-3 border border-gray-400 rounded";
registerUsername.setAttribute("type", "text");
registerUsername.setAttribute("placeholder", "Enter your username");

const passwordlabel: HTMLElement = document.createElement("label") as HTMLElement;
passwordlabel.className = "block text-gray-700";
passwordlabel.textContent = "Password";

const registerPassword: HTMLInputElement = document.createElement("input") as HTMLInputElement;
registerPassword.className = "w-full p-2 mb-3 border border-gray-400 rounded";
registerPassword.setAttribute("type", "password");
registerPassword.setAttribute("placeholder", "Enter your password");

const registerBtn: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
registerBtn.className = "w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700";
registerBtn.textContent = "Register";

const nameLabel: HTMLElement = document.createElement("label") as HTMLElement;
nameLabel.className = "block text-gray-700";
nameLabel.textContent = "Name";

const nameInput: HTMLInputElement = document.createElement("input") as HTMLInputElement;
nameInput.className = "w-full p-2 mb-3 border border-gray-400 rounded";
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "Enter your name");

register.append(h1register, usernamelabel, registerUsername, passwordlabel, registerPassword, nameLabel, nameInput, registerBtn);
document.body.appendChild(login);

document.body.appendChild(register);


registerLink?.addEventListener("click", () => {
    showRegister();
});


loginLink?.addEventListener("click", () => {
    showLogin();
});

function showLogin() {
    login.style.display = "block";
    register.style.display = "none";
}

function showRegister() {
    login.style.display = "none";
    register.style.display = "block";
}


document.addEventListener("DOMContentLoaded", () => {
    login?.addEventListener("submit", (event: Event) => {
        event.preventDefault();
        checkLogin();
    });

    loginBtn?.addEventListener("click", () => {
        checkLogin();
    });

    registerBtn?.addEventListener("click", () => {
        console.log('Username =', registerUsername.value);
        console.log('Password =', registerPassword.value);
        console.log('Name =', nameInput.value);
    });
});

function checkLogin(): void {
    const userName: string = username.value;
    const passWord: string = password.value;

    if (userName === "admin" && passWord === "root123") {
        console.log(true);
        alert("Login successful!");
    } else {
        console.log(false);
        alert("Invalid username or password.");
    }
}
