const Koa = require("koa")
const Router = require("koa-router")
const bp = require("koa-bodyparser")
const deepai = require("deepai")
const Client = require("node-osc").Client
const downloadImage = require("./utils.js").downloadImage
const deepAiApiKey = require("./secrets.js").deepaiApiKey || "quickstart-QUdJIGlzIGNvbWluZy4uLi4K"

deepai.setApiKey(deepAiApiKey)

const app = new Koa()
const router = new Router()
const oscClient = new Client("127.0.0.1", 7000)

router.post("/new", bp(), async ctx => {
	ctx.body = ctx.request.body
	const msg = ctx.request.body.message	
	console.log(`Requesting ${msg}...`)
	
	const resp = await deepai.callStandardApi("text2img", {text: msg})
	const localPath = await downloadImage(resp.output_url)
	console.log(`SUCCESS: ${localPath}`)
	oscClient.send("/url", localPath)
})

app.use(router.routes()).listen(3000)