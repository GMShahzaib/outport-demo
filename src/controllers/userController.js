export const getAllUsers = (req, resp) => {
    setTimeout(() => {
        resp.send({
            message: "Fetched all users successfully",
            users: [
                { id: 1, username: "johndoe", email: "johndoe@example.com" },
                { id: 2, username: "janedoe", email: "janedoe@example.com" },
                { id: 3, username: "bobsmith", email: "bobsmith@example.com" }
            ]
        });
    }, 2000);
};

export const createUser = (req, resp) => {
    const { email, username } = req.body;

    if (!email || !username) {
        return resp.status(400).send({
            message: "Invalid Request, email and username are required;"
        });
    }
    
    setTimeout(() => {
        resp.send({
            message: "User created successfully",
            newUser: {
                id: 4,
                username: username,
                email: email
            }
        });
    }, 2000);
};

export const getSingleUser = (req, resp) => {
    setTimeout(() => {
        resp.send({
            message: "Fetched single user successfully",
            user: {
                id: req.params.id || 1,
                username: "johndoe",
                email: "johndoe@example.com"
            }
        });
    }, 2000);
};

export const updateUser = (req, resp) => {
    setTimeout(() => {
        resp.send({
            message: "User updated successfully",
            updatedUser: {
                id: req.params.id || 1,
                username: req.body.username || "updatedUser",
                email: req.body.email || "updatedUser@example.com"
            }
        });
    }, 2000);
};
