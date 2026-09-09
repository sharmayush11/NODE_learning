let users = [
    {
        id: 1,
        name: "Ayush"
    },
    {
        id: 2,
        name: "Rahul"
    }
];
const getUsers = (req, res) => {
    res.status(200).json({
        users: users
    });

};
module.exports = {
    getUsers
};