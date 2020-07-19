const fs = require("fs")
const path = require("path")
const axios = require("axios")

module.exports = {
	downloadImage: async function(url) {
		const fullname = `${+new Date()}_${url.split('/').pop().split('?')[0]}`
		const filepath = path.resolve(__dirname, './media/dump', fullname)
		const writer = fs.createWriteStream(filepath)

		const response = await axios({
			url,
			method: 'GET',
			responseType: 'stream',
		})

		response.data.pipe(writer)

		return new Promise((resolve, reject) => {
			writer.on('finish', () => resolve(filepath))
			writer.on('error', () => reject(filepath))
		})
	}
}
