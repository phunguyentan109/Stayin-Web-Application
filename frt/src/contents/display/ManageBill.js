export default {
    api: {
        create: (user_id, room_id) => `/api/user/${user_id}/rooms/${room_id}/bills`,
        get: (user_id, room_id) => `/api/user/${user_id}/rooms/${room_id}/bills`,
        getOne: (user_id, room_id, bill_id) => `/api/user/${user_id}/rooms/${room_id}/bills/${bill_id}`,
        delete: (user_id, room_id, bill_id) => `/api/user/${user_id}/rooms/${room_id}/bills/${bill_id}`,
        update: (user_id, room_id, bill_id) => `/api/user/${user_id}/rooms/${room_id}/bills/${bill_id}`,
        updatePay: (user_id, room_id, bill_id) => `/api/user/${user_id}/rooms/${room_id}/bills/${bill_id}/pay`,
    },
    table: {
        bill: {
            card: {
                title: "Bill List",
                subtitle: "Bill of room in your apartments"
            },
            header: ["ID", "Electric", "Water", "House", "Wifi", "Total", "Contract Info", "Payment Status", "Options"],
            empty: "There is no bill information to show here."
        }
    },
    form: {
        box: {
            title: "Create New Bill",
            subtitle: "Here is a subtitle for this table"
        }
    }
}
