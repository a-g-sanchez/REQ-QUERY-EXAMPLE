const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/user', (req, res, next) => {
    const { focus, level, type } = req.query

    console.log(focus, level, type)
    const prompt = `Generate a workout that tagets the ${focus} body area and is targeted towards a ${level} level skill group.`

    res.send({msg: prompt})
})

module.exports = {
    app
}