const User = require("../../models").user;
const Schedule= require("../../models").schedule;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const bCrypt = require("bcryptjs");

const logIn = async(req,res)=>{
 console.log("recieve Lodin data");
 const {name,password}= req.body;
 try{
  console.log(User);
  const currentUser = await User.findOne({
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
    password_hash,
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
 console.log(error);
 screen.status(500).json({error:"サーバーエラーです。"});
}
};

const setProfile = async(req,res)=>{
 const id = req.param("id");
 const {name} = req.body;
 try{
  const user = await User.findOne({
   where:{user_id},
  });
  user.name = name;
  const updatedUser = await user.save();
  res.status(200).json({updatedUser});
 }catch(error){
  res.status(500).json({error:"サーバーエラー"})
 }
};

const getSchedules = async(req,res)=>{
 const user_id = req.param("id");
 try{
  const schedules = await Schedule.findAll({
  where:{user_id:user_id},
  });
  res.status(200).json({schedules});
  } catch (error) {
  res.status(500).json({ error: "サーバーエラー" });
  }
 };

  const sendSchedule = async(req,res)=>{
   const user_id = req.param("id");
   const {schedule, current_user_id} = req.body;
   try{
    const postSchedule = await Schedule.create({
     schedule,
     user_id:current_user_id,
    });
    res.status(200).json({postSchedule});
   }catch(error){
    res.status(500).json({error:"サーバーエラー"});
   }
  };

module.exports= {
 logIn,
 setProfile,
 getSchedules,
 sendSchedule
};
