const demoData = require('../data/data.json')
const express = require('express')
const router = express.Router()
const {getDays,getDay,createDay,deleteDay} = require('../controllers/dailyGoalsControl.js')


router.get('/demo', (req,res) => {
  res.send(demoData)
})

router.get('/', getDays)
router.get('/:id', getDay)
router.post('/', createDay)
router.delete('/:id', deleteDay)


module.exports = router