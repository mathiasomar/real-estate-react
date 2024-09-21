import axios from 'axios'

export async function fetchAdmins() {
    return await axios.get("/api/users/admin")
        .then(res => res.data)
}