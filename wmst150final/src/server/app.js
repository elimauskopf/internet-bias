const express = require('express')
const bodyParser = require('body-parser')
const Twitter = require('twitter')
const app = express()
var router = express.Router()
const port = 4000
require('dotenv').config({path: '../../.env'})


var jsonParser = bodyParser.json()



var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    bearer_token: process.env.BEARER_TOKEN
})

router.get('/', (req, res) => {
  
    client.get('search/tweets', {q: 'feminism', count: 5, include_entities: false }, function(error, tweets) {
        if(error) {
            throw(error)
        }
        tweets = tweets.statuses.map(element => {
            return  element.text
        });
        res.send(tweets)
    });
   
  
   
})

app.use(jsonParser)
app.use('/api', router)
app.listen(port, () => console.log(`app listening on port ${port}`))


