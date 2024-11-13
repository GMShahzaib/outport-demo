import express from 'express'
import Outport from 'outport';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const outport = new Outport({
    title: 'User Management APIs',
    version: '1.0.0',
    servers: [
        'http://localhost:8080',
        'https://api.example.com/v1'
    ],
    headers: [
        {
            key: "Authorization",
            value: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            description: "Used for global session identification across requests"
        }
    ],
    description: `Outport is an API testing and documentation library that helps you document, test, and visualize your API endpoints in a user-friendly interface.`,
});


outport.use("Authentication", [
    {
        "path": "/login",
        "method": "POST",
        "summary": "",
        "headers": [],
        "parameters": [],
        "body": {
            "type": "json",
            "data": [
                {
                    "key": "username",
                    "value": "johndoe"
                },
                {
                    "key": "email",
                    "value": "johndoe@example.com"
                },
                {
                    "key": "password",
                    "value": "testing123!"
                }
            ]
        },
        "responses": [
            {
                "status": 200,
                "description": "Success Example Response:",
                "value": {
                    "message": "Login successful",
                    "user": {
                        "id": 1,
                        "username": "johndoe",
                        "email": "johndoe@example.com",
                        "token": "abc123xyz"
                    }
                },
                "headers": [
                    {
                        "key": "connection",
                        "value": "keep-alive"
                    },
                    {
                        "key": "content-length",
                        "value": "117"
                    },
                    {
                        "key": "content-type",
                        "value": "application/json; charset=utf-8"
                    },
                    {
                        "key": "date",
                        "value": "Wed, 13 Nov 2024 05:13:46 GMT"
                    },
                    {
                        "key": "etag",
                        "value": "W/\"75-LLOCuKBksfOw3S0OqgZpeWyol9g\""
                    },
                    {
                        "key": "keep-alive",
                        "value": "timeout=5"
                    },
                    {
                        "key": "x-powered-by",
                        "value": "Express"
                    }
                ]
            }
        ]
    }
])


outport.use("Users", [
    {
        "path": "/users",
        "method": "GET",
        "summary": "get all users",
        "headers": [],
        "parameters": [
            {
                "key": "page",
                "value": "1",
                "description": ""
            },
            {
                "key": "limit",
                "value": "3",
                "description": ""
            }
        ],
        "responses": [{
            "status": 200,
            "description": "Example Response:",
            "value": {
                "message": "Fetched all users successfully",
                "users": [
                    {
                        "id": 1,
                        "username": "johndoe",
                        "email": "johndoe@example.com"
                    },
                    {
                        "id": 2,
                        "username": "janedoe",
                        "email": "janedoe@example.com"
                    },
                    {
                        "id": 3,
                        "username": "bobsmith",
                        "email": "bobsmith@example.com"
                    }
                ]
            },
            "headers": [
                {
                    "key": "connection",
                    "value": "keep-alive"
                },
                {
                    "key": "content-length",
                    "value": "236"
                },
                {
                    "key": "content-type",
                    "value": "application/json; charset=utf-8"
                },
                {
                    "key": "date",
                    "value": "Wed, 13 Nov 2024 05:16:05 GMT"
                },
                {
                    "key": "etag",
                    "value": "W/\"ec-TVflJxSWMIjSTVuxY+HUU/gke4Y\""
                },
                {
                    "key": "keep-alive",
                    "value": "timeout=5"
                },
                {
                    "key": "x-powered-by",
                    "value": "Express"
                }
            ]
        }]
    },
    {
        "path": "/users",
        "method": "POST",
        "summary": "create user",
        "headers": [
            {
                "key": "Authorization",
                "value": "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "description": ""
            }
        ],
        "parameters": [],
        "body": {
            "type": "json",
            "data": [
                {
                    "key": "username",
                    "value": "johndoe"
                },
                {
                    "key": "email",
                    "value": "johndoe@example.com"
                }
            ]
        },
        "responses": [
            {
                "status": 200,
                "description": "Example Response:",
                "value": {
                    "message": "User created successfully",
                    "newUser": {
                        "id": 4,
                        "username": "johndoe",
                        "email": "johndoe@example.com"
                    }
                },
                "headers": [
                    {
                        "key": "connection",
                        "value": "keep-alive"
                    },
                    {
                        "key": "content-length",
                        "value": "109"
                    },
                    {
                        "key": "content-type",
                        "value": "application/json; charset=utf-8"
                    },
                    {
                        "key": "date",
                        "value": "Wed, 13 Nov 2024 05:47:54 GMT"
                    },
                    {
                        "key": "etag",
                        "value": "W/\"6d-32uOTe1AmofFdKg6T3AqBFRKyU8\""
                    },
                    {
                        "key": "keep-alive",
                        "value": "timeout=5"
                    },
                    {
                        "key": "x-powered-by",
                        "value": "Express"
                    }
                ]
            }
        ]
    },
    {
        "path": "/users/{id}",
        "method": "GET",
        "summary": "get single user",
        "headers": [
            {
                "key": "Authorization",
                "value": "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "description": ""
            }
        ],
        "parameters": [],
        "responses": [{
            "status": 200,
            "description": "Example Response:",
            "value": {
                "message": "Fetched single user successfully",
                "user": {
                    "id": "50",
                    "username": "johndoe",
                    "email": "johndoe@example.com"
                }
            },
            "headers": [
                {
                    "key": "connection",
                    "value": "keep-alive"
                },
                {
                    "key": "content-length",
                    "value": "116"
                },
                {
                    "key": "content-type",
                    "value": "application/json; charset=utf-8"
                },
                {
                    "key": "date",
                    "value": "Wed, 13 Nov 2024 05:48:38 GMT"
                },
                {
                    "key": "etag",
                    "value": "W/\"74-tzjMWa6DATlkK5r4PCiawFyEhyc\""
                },
                {
                    "key": "keep-alive",
                    "value": "timeout=5"
                },
                {
                    "key": "x-powered-by",
                    "value": "Express"
                }
            ]
        }]
    },
    {
        "path": "/users/{id}",
        "method": "DELETE",
        "summary": "delete user",
        "headers": [
            {
                "key": "Authorization",
                "value": "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "description": ""
            }
        ],
        "parameters": [],
        "body": {
            "type": "json",
            "data": []
        },
        "responses": [{
            "status": 200,
            "description": "Example Response:",
            "value": {
                "message": "User updated successfully",
                "updatedUser": {
                    "id": "50",
                    "username": "updatedUser",
                    "email": "updatedUser@example.com"
                }
            },
            "headers": [
                {
                    "key": "connection",
                    "value": "keep-alive"
                },
                {
                    "key": "content-length",
                    "value": "124"
                },
                {
                    "key": "content-type",
                    "value": "application/json; charset=utf-8"
                },
                {
                    "key": "date",
                    "value": "Wed, 13 Nov 2024 05:55:26 GMT"
                },
                {
                    "key": "etag",
                    "value": "W/\"7c-qSuaGbvJj9/64mxLzj+Qnfs2jyY\""
                },
                {
                    "key": "keep-alive",
                    "value": "timeout=5"
                },
                {
                    "key": "x-powered-by",
                    "value": "Express"
                }
            ]
        }]
    },
    {
        "path": "/users/{id}",
        "method": "PUT",
        "summary": "update user",
        "headers": [
            {
                "key": "Authorization",
                "value": "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "description": ""
            }
        ],
        "parameters": [],
        "body": {
            "type": "json",
            "data": [
                {
                    "key": "username",
                    "value": "johndoe"
                },
                {
                    "key": "email",
                    "value": "johndoe@example.com"
                }
            ]
        },
        "responses": [{
            "status": 200,
            "description": "Example Response:",
            "value": {
                "message": "User updated successfully",
                "updatedUser": {
                    "id": "50",
                    "username": "johndoe",
                    "email": "johndoe@example.com"
                }
            },
            "headers": [
                {
                    "key": "connection",
                    "value": "keep-alive"
                },
                {
                    "key": "content-length",
                    "value": "116"
                },
                {
                    "key": "content-type",
                    "value": "application/json; charset=utf-8"
                },
                {
                    "key": "date",
                    "value": "Wed, 13 Nov 2024 05:56:46 GMT"
                },
                {
                    "key": "etag",
                    "value": "W/\"74-2cGDYGaNhIdYU/ZTNdb/uApCZDA\""
                },
                {
                    "key": "keep-alive",
                    "value": "timeout=5"
                },
                {
                    "key": "x-powered-by",
                    "value": "Express"
                }
            ]
        }]
    }
])



const login = (req, resp) => {
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

const getAllUsers = (req, resp) => {
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
}

const createUser = (req, resp) => {

    const { email, username } = req.body;

    console.log(req.body)

    if (!email || !username) {
        return resp.status(400).send({
            message: "Invalid Request, email and username is required;"
        })
    }
    setTimeout(() => {
        resp.send({
            message: "User created successfully",
            newUser: {
                id: 4,
                username: req.body.username || "newuser",
                email: req.body.email || "newuser@example.com"
            }
        });
    }, 2000);
}

const getSingleUser = (req, resp) => {
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
}

const updateUser = (req, resp) => {
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
}

app.route("/login").post(login)


app.route("/users")
    .get(getAllUsers)
    .post(createUser)

app.route("/users/:id")
    .get(getSingleUser)
    .put(updateUser)
    .delete(updateUser)


app.use('/docs', outport.serve())


app.listen(8080, () => {
    console.log("application is running on 8080 port.")
})