const userModel=require('../model/userModel')

const userController={

    getLogin(req,res){
        res.render('login');
    },
    getRegister(req,res){
        res.render('register');
    },
    postRegister(req,res){
        const user= req.body;
        const userId=userModel.createUser(user);
        res.send(`User Registered with Id :  ${userId}`)
    }
}

module.exports=userController;