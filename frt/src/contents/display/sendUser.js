export default {
    api: {
        user: {
            get: () => `/api/user`,
            post: (user_id) => `/api/user/${user_id}/mailer`,
        }
    },
    form: {
        box: {
            title: "Send mail",
            subtitle: "This is form for send mail for member"
        }
    }
}
