const express = require ('express')
const path = require ('path')
const app = express()
const hostname = "127.0.0.1";
const PORT = 5555;

//EXPRESS SPECIFIC STUFF
app.use("/static", express.static('static'))
app.use(express.urlencoded())

//PUG SPEFIC STUFF
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

//END POINT
app.get('/', (req, res)=>{
    // const params = {}
    res.status(200).render('home.pug')
})

app.get('/about', (req, res)=>{
    // const params = {}
    res.status(200).render('about.pug')
})

app.get('/features', (req, res)=>{
    // const params = {}
    res.status(200).render('features.pug')
})

app.get('/saving', (req, res)=>{
    // const params = {}
    res.status(200).render('saving.pug')
})

app.get('/credit', (req, res)=>{
    // const params = {}
    res.status(200).render('credit.pug')
})
app.get('/signup', (req, res)=>{
    // const params = {}
    res.status(200).render('signup.pug')
})

//START THE SERVER
app.listen(PORT, hostname, ()=>{
    console.log(`the application is successfully on port http://${hostname}:${PORT}`)
})