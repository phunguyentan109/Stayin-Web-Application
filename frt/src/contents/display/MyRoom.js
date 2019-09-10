export default {
    api: {
        room: {
            get: (user_id, room_id) => `/api/user/${user_id}/rooms/${room_id}/getRoom`
        },
        user: {
            get: (user_id) => `/api/user/${user_id}/userRoom`,
            post: (user_id) => `/api/user/${user_id}/amount`
        }
    },
    form: {
        box: {
            title: "My Room",
            subtitle: "This is room detail"
        }
    }
}
