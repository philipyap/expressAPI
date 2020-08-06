require('dotenv').config()

const express = require('express')
const axios = require('axios')
const app = express()

let API_KEY = process.env.API_KEY

app.set('view engine', 'ejs')

app.use(express.static('static'))

app.get('/', (req, res)=>{
    let qs = {
        params:{
            s: 'star wars',
            apikey: API_KEY
    }
}
    axios.get('http://www.omdbapi.com', qs)
    .then(function(response){
        console.log(response.data);
        let episodes = response.data.Search
        res.render('home',{episodes})
    })
    .catch(err => {
        console.log(err)
    })

})
app.listen(3000)