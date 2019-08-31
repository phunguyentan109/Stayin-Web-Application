export default {
    api: {
        create: (user_id, room_id) => `/api/user/${user_id}/rooms/${room_id}/bills`,
        get: (user_id, room_id) => `/api/user/${user_id}/rooms/${room_id}/bills`,
        getOne: (user_id, room_id, bill_id) => `/api/user/${user_id}/rooms/${room_id}/bills/${bill_id}`,
        delete: (user_id, room_id, bill_id) => `/api/user/${user_id}/rooms/${room_id}/bills/${bill_id}`,
        update: (user_id, room_id, bill_id) => `/api/user/${user_id}/rooms/${room_id}/bills/${bill_id}`,
        updatePay: (user_id, room_id, bill_id) => `/api/user/${user_id}/rooms/${room_id}/bills/${bill_id}/pay`,
    }
}
