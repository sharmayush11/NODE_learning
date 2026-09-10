const users = [
    {
        id: 1,
        name: "Ayush"
    },
    {
        id: 2,
        name: "Rohit"
    },
    {
        id: 3,
        name: "Adi"
    },
    {
        id: 4,
        name: "Mridul"
    }
];

const getUsers = (req, res) => {
    res.status(200).json({
        users: users
    });
};

const getUser = (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    res.status(200).json({
        user: user
    });
};

const createUser = (req, res) => {
    const { name } = req.body;
    const newUser = {
        id: users.length + 1,
        name: name
    };
    users.push(newUser);
    res.status(201).json({
        message: "User created",
        user: newUser
    });
};

module.exports = {getUsers,getUser,createUser};