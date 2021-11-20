const request = require('request')

const news = (callback) => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-10-15&sortBy=publishedAt&apiKey=67078bb9-17b0-4983-b31d-b31ceb11436c'
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable To Connecte', undefined)
        } 

        else if (response.body.status === 'error') {
            callback(response.body.message, undefined)
        } 

        else {
            callback(undefined, response.body.articles)
        }
    })
}

module.exports = news