const express = require('express')
const router = express.Router()

const User = require('../models/user')


//@API http://localhost:8000/api/users
//@Desc Add new User
//@access public
router.post('/', (req, res) => {
    const newUser = new User({ ...req.body })
    newUser.save()
        .then(user => res.status(200).json({ msg: 'successfuly added', user }))
        .catch(err => res.status(400).json(err))
})

//@API http://localhost:8000/api/users
//@Desc Get All Users
//@access public
router.get('/', (req, res) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(400).json(err))
})

//@API http://localhost:8000/api/users/:id
//@Desc Get User by Id
//@access public
router.get('/:_id', (req, res) => {
    let { _id } = req.params
    User.find({ _id })
        .then(user => res.send(user))
        .catch(err => res.send(err))
})

//@API http://localhost:8000/api/users/:id
//@Desc Delete User by Id
//@access public
router.delete('/:_id', (req, res) => {
    let { _id } = req.params
    User.findByIdAndDelete(_id)
        .then(() => res.send("User has been deleted"))
        .catch(err => res.send(err))
})

//@API http://localhost:8000/api/users/:id
//@Desc Update User by Id
//@access public
router.put('/:_id', (req, res) => {
    let { _id } = req.params
    User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
        .then(() => res.send("User has been updated"))
        .catch(err => res.send(err))
})



module.exports = router
