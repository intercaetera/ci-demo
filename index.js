const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.sendStatus(200)
})

const server = app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})

module.exports = server
