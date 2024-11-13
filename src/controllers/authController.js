export const login = (req, resp) => {
    setTimeout(() => {
        resp.send({
            message: "Login successful",
            user: {
                id: 1,
                username: "johndoe",
                email: "johndoe@example.com",
                token: "abc123xyz"
            }
        });
    }, 2000);
}
