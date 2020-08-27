var express = require('express');
var router = express.Router();
var bcrypt=require('bcryptjs')

var db = require('../db');
router.get('/register', (req, res) => {
    db.User.find({}, (err, users) => {
        if (err) res.status(500).send(err)
        res.status(200).send(users)
    })
})

router.post('/register', (req, res) => {
    var newUser = new db.User(req.body);
    newUser.save((err, user) => {
        if (err) res.status(500).send(err);
        res.status(200).send(user);
    })
})

router.post('/login', (req, res) => {
    var user = new db.User(req.body);
    db.User.find({ email: user.email }).then(userdata => {
        if (!userdata) {
            console.log("user does not exist")
        }
        else {
            if (userdata[0].password === user.password) {
                console.log("you have successfully logged in...")
                res.send(userdata)
            }
            else {
                console.log("invalid username or password")
                res.status(500)
            }
        }
    })
        .catch(err => console.log(err))

})
router.delete('/register/:id', (req, res) => {
    var id = req.params.id
    db.User.findByIdAndDelete({ _id: id }, (err, users) => {
        if (err) res.status(500).send(err);
        res.status(200).send(users)
    })
})

module.exports = router;