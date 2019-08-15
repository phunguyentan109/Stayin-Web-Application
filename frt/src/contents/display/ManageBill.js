export default {
    api: {
        create: (user_id, room_id) => `/api/user/${user_id}/bills/${room_id}`,
        get: (user_id) => `/api/user/${user_id}/bills`,
        delete: (user_id, bill_id) => `/api/user/${user_id}/bills/${bill_id}`
    },
    table: {
        bill: {
            card: {
                title: "Bill List",
                subtitle: "Bill of room in your apartments"
            },
            header: ["ID", "Electric", "Water", "House", "Wifi", "Extra", "Contract Info", "Options"],
            empty: "There is no price information to show here."
        }
    },
    form: {
        box: {
            title: "Create New Bill",
            subtitle: "Here is a subtitle for this table"
        }
    }
}
