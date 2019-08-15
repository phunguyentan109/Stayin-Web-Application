export default {
    api: {
        create: (user_id) => `/api/user/${user_id}/price`,
        get: (user_id) => `/api/user/${user_id}/price`,
        delete: (user_id, price_id) => `/api/user/${user_id}/price/${price_id}`
    },
    table: {
        price: {
            card: {
                title: "Price List",
                subtitle: "Price of room in your apartments"
            },
            header: ["ID", "Type", "Electric", "Water", "House", "Wifi", "Extra", "Duration", "Options"],
            empty: "There is no price information to show here."
        }
    },
    form: {
        box: {
            title: "Create New Price",
            subtitle: "Here is a subtitle for this table"
        }
    }
}
