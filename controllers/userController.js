const users = [
    { id : 1 , name : 'ayu' },
    { id : 2 , name : 'adi' },
    { id : 3 , name : 'jai' }
]

const deleteUser = (req , res) => {
    const id = Number(req.params.id)
    const userIdx = users.findIndex(user => user.id === id)

    if (userIdx === -1) {
        return res.status(404).json({
            message : 'user not found'
        })
    }
    users.splice(userIdx , 1)
    res.status(200).json({
        message : 'user deleted'
    })
}

module.exports = { getUser , getUsers }