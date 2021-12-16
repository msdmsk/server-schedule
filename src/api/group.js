const User = require("../../models").user;
const Group = require("../../models").group;
const Users_Groups = require("../../models").users_groups;
const Schedule= require("../../models").schedule;

const findGroupId = async(req,res)=>{
 const currentGroupId = req.param("id")
 const {groupId} =req.body;
 try{
  const groups = await Group.findAll({
   include:[{model:users_group}],
  });
  let currentGroupId = 0;
  groups.map((group)=>{
   if(
    Number(currentGroupId) === group.dataValues.usersgroups[0].user_id &&
    groupId === group.dataValues.usersgroups[1].user_id
   ){
    currentGroupId = group.id;
   }
   if(
    Number(currentGroupId) === group.dataValues.usersgroups[1].user_id &&
    groupId === group.dataValues.usersgroups[0].user_id
   ){
    currentGroupId = group.id;
   }
  });
  res.status(200).json({currentGroupId});
  }catch(error){
  res.status(500).json({error:"サーバーエラー"});
  }
 };

 const getGroupSchedules = async(req,res)=>{
   const group_id = req.param("id");
   try{
    const schedules = await Schedule.findAll({
    where:{group_id:group_id},
    });
    res.status(200).json({Schedule});
    } catch (error) {
    res.status(500).json({ error: "サーバーエラー" });
    }
   };

    const sendGroupSchedule = async(req,res)=>{
     const group_id = req.param("id");
     const {groupSchedule, current_group_id} = req.body;
     try{
      const postGroupSchedule = await GroupSchedule.create({
       groupSchedule,
       group_id:current_group_id,
      });
      res.status(200).json({postGroupSchedule});
     }catch(error){
      res.status(500).json({error:"サーバーエラー"});
     }
    };
 module.exports= {
    findGroupId,
    getGroupSchedules,
    sendGroupSchedule
   };
