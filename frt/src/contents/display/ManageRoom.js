export default {
    api: {
        create: (user_id) => `/api/user/${user_id}/rooms`,
        get: (user_id) => `/api/user/${user_id}/rooms`,
        delete: (user_id, room_id) => `/api/user/${user_id}/rooms/${room_id}`
    },
    table: {
        header: ["ID", "Room Name", "People", "Bill Date", "Price Type", "Options"],
        empty: "There is no room information to show here."
    }
}
