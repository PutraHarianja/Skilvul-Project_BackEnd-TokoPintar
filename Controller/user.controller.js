const UserModel = require('../Models/user.model')

class UserController {

    static async createNewUser(req, res) {
        try {
            await UserModel.findOne({ username: req.body.username }).then((user) => {
                if (user) {
                    res.status(400).json({
                        message: 'user already exist'
                    })
                } else {
                    const newUser = new UserModel({
                        username : req.body.username,
                        password : req.body.password,
                        email : req.body.email,
                        role : req.body.role,
                    });

                    newUser.save()
                    return res.status(200).send({
                        message: 'user created successfully',
                        data: newUser
                    });
                }
            })
        } catch (error) {
            res.status(500).send({ err: error })
        }
    }

    static async getUserbyId(req, res) {
        UserModel.findById({ _id: req.params.id_user }, (error, result) => {
            if (error) {
                return res.send({
                    message: 'no user found'
                })
            } else {
                res.status(200).send({
                    message: 'data retrieved',
                    data: result
                })
            }
        })
    }

    static async updateUserbyId(req, res) {
        UserModel.findByIdAndUpdate({ _id: req.params.id_user }, {
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            role : req.body.role,
        }, (error, result) => {
            if(error){
                console.log(error)
                return res.send({
                    message: 'no user found, update action failed'
                })
            } else {
                res.status(200).send({
                    message: 'update data user success',
                    data: req.body
                })
            }
        })
    }

    static async getAllUsers(req, res) {
        UserModel.find({}, (error, result) => {
            if (error)
                return res.send(error);

            res.json(result)
        })
    }

    static async deleteUserbyId(req, res) {
        UserModel.deleteOne({ _id: req.params.id_user }, (error, result) => {
            if(error) {
                res.status(400).send({
                    message : 'no id found, delete action failed'
                })
            }else {
                res.status(200).send({
                    message: `delete data ${req.params.id_user} successfully`
                })
            }
        })
    }

}


module.exports = UserController