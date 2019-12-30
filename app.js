const express = require('express')
const path = require('path')
const app = express()
const routes = require('./routes/index')
const body = require('body-parser')
//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join( __dirname, 'views'))
app.set('view engine', 'ejs')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use(routes)

//static files
app.use(express.static( path.join(__dirname, 'public')))

app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
})