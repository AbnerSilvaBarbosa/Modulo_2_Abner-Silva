const { info } = require("console")
const express = require("express") // Exportanto o modulo do express
const path = require("path") // Exportanto o path, para localizar pastas
const PORT = 3000 // Definindo o numero da porta
const bodyParser = require("body-parser")

const sqlite = require("sqlite")
const sqlite3 = require("sqlite3").verbose()

const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname,"public"))) //Localizar a pasta desejada

app.get("/",(req,res)=>{ //Get tendo como resposta uma renderização do arquivo que eu desejar
	res.render("index")
})

app.get("/infos",(req,res)=>{

	async function infoDB(){
		const db = await sqlite.open({filename:"./database/bancoDeDados.db",driver:sqlite3.Database})

		await db.get("SELECT * FROM  abner").then((result)=>{
			console.log(result)
			res.json(result)

		})

		db.close()

	}

	infoDB()



})

app.listen(PORT,()=>{ //Iniciando o serividor com a porta desejada
	console.log(`Servidor iniciado na porta http://localhost:3000/`)
})