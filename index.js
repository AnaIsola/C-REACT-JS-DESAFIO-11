const express = require ('express')
const app = express()
const port = 4000

app.use (express.static('public'))

app.get ('/', (req, res) => {
	res.send('Hello Ana')
})

app.get ('/item', (req, res) =>{
	res.setHeader('Acces-Control-Allow-Origin', '*')

	res.jesono({
		data: [1,2,3,4]
	})
})

app.listen(port, () =>{
	console.log('Example app listening http://localhost:${port')
})