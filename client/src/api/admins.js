import axios from 'axios'

export async function fetchAdmins() {
    return await axios.get("/api/users/admin")
        .then(res => res.data)
}

export async function createAdmin(values) {
    return await axios.post('/api/users/add-admin', values)
        .then(res => res.json())
}