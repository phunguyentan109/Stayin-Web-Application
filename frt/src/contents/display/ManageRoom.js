export default {
    api: {
        room: {
            create: (user_id) => `/api/user/${user_id}/rooms`,
            get: (user_id) => `/api/user/${user_id}/rooms`,
            delete: (user_id, room_id) => `/api/user/${user_id}/rooms/${room_id}`
        },
        people: {
            get: (user_id) => `/api/user/${user_id}/people`
        },
        price: {
            get: (user_id) => `/api/user/${user_id}/price`
        }
    },
    table: {
        room: {
            card: {
                title: "Room List",
                subtitle: "List of room in your apartments",
            },
            header: ["ID", "Room Name", "People", "Bill Date", "Price Type", "Options"],
            empty: "There is no room information to show here."
        }
    },
    form: {
        box: {
            title: "Create new room",
            subtitle: "Fill in suitable data to create a new room"
        },
        info: {
            title: "New Room Information",
            subtitle: "Please fill in suitable information for your room"
        },
        people: {
            title: "People Assigned List",
            subtitle: "This is all the people assigned for this room"
        },
        wait: {
            title: "Waiter List",
            subtitle: "This is all the people who don't have room"
        }
    }
}
