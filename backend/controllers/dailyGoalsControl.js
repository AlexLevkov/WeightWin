const mongoose = require('mongoose');
const DailyGoal = require('../models/dailyGoalModel.js')

const getDays = async (req, res) => {
  try{
    const days = await DailyGoal.find({})
    if(!days) {
      return res.status(404).json({error:'Not Found'})
    }
    res.status(200).json(days)
  }
  catch(err){
    console.log('err:', err)
  }
}
  
const getDay = async (req, res) => {
  try{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error:'Not Found'})
    }
    const day = await DailyGoal.findById(id);

    if(!day) {
      return res.status(404).json({error:'Not Found'})
    }
    res.status(200).json(day)
  }
  catch(err){
    console.log('err:', err)
  }
}

const createDay = async (req, res) => {
  const {date,water,weight,affirm,walk}= req.body
  try { 
    const day = await DailyGoal.create({date,water,weight,affirm,walk})
    res.status(200).json({day})
  } catch(err){
    res.status(400).json({err:err.message})
  }
}

const deleteDay = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such day'})
  }

  const day = await DailyGoal.findOneAndDelete({_id: id})

  if(!day) {
    return res.status(400).json({error: 'No such day'})
  }

  res.status(200).json(day)
}



module.exports = {
  getDays,
  getDay,
  createDay,
  deleteDay
}