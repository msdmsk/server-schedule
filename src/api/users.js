const User = require("../../models").user;
const Group = require("../../models").group;
const Schedule= require("../../models").schedule;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const bCrypt = require("bcryptjs");

const logIn = async(req,res)=>{
 const {name,password}= req.body;
 try{
  const CurrensUser = await User.findOne({
   where:{name},
  });
  if (currentUser === null){
   const password_hash = bCrypt.hashSync(
    password,
    bCrypt.genSaltSync(8),
    null
   );
   const newUser= await User.create({
    name,
    password_hash
   });
  res.status(200).json({ currentUser: newUser });
  return;
 }
 if(!bCrypt.compareSync(password,currentUser.password_hash)){
  res.status(404).json({error:"パスワードが間違っています。"});
  return;
 }
 res.status(200).json({currentUser});
}catch(error){
 screen.status(500).json({error:"サーバーエラーです。"});
}
};

module.exports= {
 logIn,
};
