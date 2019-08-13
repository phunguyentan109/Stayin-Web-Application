export default {
    api: {
        create: (user_id) => `/api/user/${user_id}/prices`,
        get: (user_id) => `/api/user/${user_id}/prices`,
        delete: (user_id, price_id) => `/api/user/${user_id}/prices/${price_id}`
    },
    table: {
        header: ["ID", "Type", "Electric", "Water", "House", "Wifi", "Extra", "Duration", "Options"],
        empty: "There is no price information to show here."
    }
}