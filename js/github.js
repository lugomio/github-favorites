const endpoint = `https://api.github.com/users/`;

export async function fetchUser(userName) {
    try {
        const response = await fetch(endpoint + userName);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:' + error);
        throw error;
    }
}