import { updateView } from "./table.js";

const storage = window.localStorage;
storage.setItem("users", storage.getItem("users") ?? JSON.stringify([]));

function addUser(user) {
    const users = JSON.parse(storage.getItem("users"));
    users.push(user);
    storage.setItem("users", JSON.stringify(users));

    updateView();
}

function removeUser(e) {    
    const id = e.target.dataset.id;

    const users = JSON.parse(storage.getItem("users"));
    storage.setItem("users", JSON.stringify(users.filter((user) => user.id != id)));

    updateView();
}

function getUsers(){
    return JSON.parse(storage.getItem("users"));
}

export { addUser, removeUser, getUsers }