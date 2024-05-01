import { fetchUser } from "./github.js";
import { addUser } from "./storage.js";

const form = document.querySelector('form.add-user');

function handleForm(e) {
    e.preventDefault();

    const userName = form.querySelector('input').value;
    if (!userName) return;

    fetchUser(userName)
        .then(response => {
            if (response.message) return;
            addUser(response);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export { form, handleForm }