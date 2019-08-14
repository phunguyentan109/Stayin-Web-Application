export default {
    api: {
        account: {
            get: () => `/api/user`,
            delete: (user_id) => `/api/user/${user_id}`
        },
        people: {
            get: (user_id) => `/api/user/${user_id}/people`,
            delete: (user_id, people_id) => `/api/user/${user_id}/people/${people_id}`
        }
    },
    table: {
        account: {
            card: {
                title: "Unactive Accounts",
                subtitle: "List of all accounts which are not activated",
            },
            header: ["ID", "Email", "Options"],
            empty: "There is no people information to show here."
        },
        people: {
            card: {
                title: "People List",
                subtitle: "List of all people who are hiring/living in your apartments",
            },
            header: ["ID", "Name", "Age", "Job", "Email", "Phone Number", "Options"],
            empty: "There is no people information to show here."
        }
    }
}
