const express = require('express')
const spotifyWebApi = require('spotify-web-api-node')

const app = express()

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new spotifyApi({
        redirectUri: 'http://localhost:3000',
        clientId: '0c06955ba36b41f88fb90f57489ec235',
        clientSecret: 'ae8d73a16cfe441fae152d131a926781'
    })
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    })
    .catch(() => {
        res.sendStatus(400)
    })
})