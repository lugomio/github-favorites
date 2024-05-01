import { getUsers, removeUser } from "./storage.js";

const table = document.querySelector(".favorites table");
const emptyState = document.querySelector(".favorites .no-favorites");

function updateView() {
    const users = getUsers();
    toggleEmptyState(users.length);
    
    const html = users.map(user => {
        return `
        <tr data-id="${user.id}">
            <td class="user">
                <img src="${user.avatar_url}" alt="${user.name} foto">
                <div>
                    <h2 class="name">${user.name}</h2>
                    <a class="path" href="https://github.com/${user.login}" target="_blank"><span>/${user.login}</span></a>
                </div>
            </td>
            <td class="repositories">${user.public_repos}</td>
            <td class="followers">${user.followers}</td>
            <td class="action">
                <button data-id="${user.id}">Remove</button>
            </td>
        </tr>
        `;
    }).join('');
    
    table.querySelector('tbody').innerHTML = html;

    table.querySelectorAll('tbody button').forEach((btn) => {
        btn.addEventListener('click', removeUser);
    })
}

function toggleEmptyState(usersCount){
    if(usersCount > 0){
        emptyState.classList.add('hide');
        return;
    }
    emptyState.classList.remove('hide');
}

export { updateView };