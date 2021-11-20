
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const news = require('./tools/news-api')


const app = express()
const port = process.env.PORT || 3000


const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))

app.set('view engine', 'hbs');


const viewsPath =path.join(__dirname,'../templates/views')
app.set('views',viewsPath)

const partialsPath =path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
    news((error,data)=>{

        res.render('index',{data})
    })
})

app.get('*',(req,res)=>{
    res.render('notfound',{
        title:404
    })
})

app.listen(port, ()=>{
    console.log('server is running', port);
})