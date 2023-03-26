const User = require('../models/User');
const express = require('express');



const addUser = async (req, res)=> {
    
    try{

    const exp = req.body.exp;
    const descr = req.body.descr;
    const cat = req.body.cat;

    const data = await User.create({exp: exp, descr: descr, cat: cat});
    res.status(201).json({newUserDetail: data});
    }catch(err){
       res.status(500).json({
           error: err
       })
    }

}

const getUser = async (req, res) => {
    try{
    const users = await User.findAll();
    res.status(200).json({allUsers: users});
    }catch(error){
        console.log('Get user is failing', JSON.stringify(error));
        res.status(500).json({error: error})
    }
}

const deleteUser = async (req, res) => {
    try{
        if(req.params.id == 'undefined'){
            console.log('ID is missing');
            return res.status(400).json({err: 'ID is missing'})
        }
    const uId = req.params.id;
    await User.destroy({where: {id: uId}});
    res.sendStatus(200);
    }catch(err){
        console.log(err);
        res.status(500).json(err)

    }
}

module.exports = {
    addUser,
    getUser,
    deleteUser
}
