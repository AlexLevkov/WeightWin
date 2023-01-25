const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dailyGoalSchema = new Schema({
  date:{
    type: String,
    // required: true,
  },
  water:{
    type: Boolean,
    // required: true,
  },
  weight:{
    type: Number,
    // required: true,
  },
  affirm:{
    type: Boolean,
    // required: true,
  },
  walk:{
    type: Number,
    // required: true,
  },
},{timestamps:true})

// this will create the collection in mongoDB and make it plural Dailygoals 
module.exports = mongoose.model('Dailygoal',dailyGoalSchema)

