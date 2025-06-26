const user = require('../models/UserModel')
const bcrypt = require('bcrypt');

exports.getRoute= async (req,res)=>{
    const userdata = await user.find();
    res.status(201).json(userdata);
    res.send('Get route working');
}

exports.getRouterById = async (req, res) => {
    const userData = await user.findById(req.params.id);
    res.status(201).json({userData});
}

exports.signupRoute = async (req,res)=>{
    const {username, password} = req.body;
    const exist = await user.findOne({username});
    if(exist){
        return res.status(401).json({
            message:"User already exist"
        })
    }else{
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new user({username,password:hashedPassword});
        await newUser.save();
        res.status(201).json({user:newUser});
    }
}

exports.loginRoute = async (req,res) =>{
    const {username, password} = req.body;
    const userdata = await user.findOne({username});
    if(!userdata){
        return res.status(401).json({
            success: false,
            message:"User Not exist"
        })
    }else{
        const valid = await bcrypt.compare(password,userdata.password);
        if(!valid) res.status(401).json({success: false,message:"Password invalid"});
        res.status(201).json({success: true,message:"Login successfull"});
    }
}

exports.putRoute = async(req,res)=>{
    const {username, password} = req.body;
    const update = await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!update){
        return res.status(401).json({message:"User not exist"});
    }else{
        res.status(201).json({update});
    }
}

exports.deleteRoute = async(req,res)=>{
    const deleteuser = await user.findByIdAndDelete(req.params.id);
    if(!deleteuser){
        return res.status(401).json({message:"User not exist"});
    }else{
        res.status(201).json({deleteuser});
    }
}