import { insertUser} from "./utils.js";

const form = document.getElementById("user-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    const user = {
        username: form["username"].value,
        password: form["password"].value
    }

    insertUser(user).then(() => location.reload());
})