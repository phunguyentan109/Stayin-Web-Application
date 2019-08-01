import bg from "assets/img/loginBg.jpg"

export default {
    bg,
    bgColor: "rgba(0, 0, 0, 0.5)",
    heading: "Login",
    input: [
        {
            placeholder: "Email",
            name: "email",
            icon: "far fa-envelope"
        },
        {
            type: "password",
            placeholder: "Password",
            name: "password",
            icon: "fas fa-key"
        }
    ],
    button: {
        cssClass: "signin",
        text: "Get access"
    }
}
