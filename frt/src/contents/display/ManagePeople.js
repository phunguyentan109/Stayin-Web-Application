export default {
    api: {
        get: (user_id) => `/api/user/${user_id}/people`,
        delete: (user_id, people_id) => `/api/user/${user_id}/people/${people_id}`
    },
    table: {
        header: ["ID", "Name", "Age", "Job", "Email", "Phone Number", "Options"],
        empty: "There is no people information to show here."
    }
}
