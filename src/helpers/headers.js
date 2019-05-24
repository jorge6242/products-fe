export default function headers() {
    const items = {
        'Accept': 'application/json'
    };
    const token = localStorage.getItem('token');

    if (token) {
        items.Authorization = `Bearer ${token}`;
    }

    return items;
}