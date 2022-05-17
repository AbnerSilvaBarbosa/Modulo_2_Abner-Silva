const express = require("express") // Exportanto o modulo do express
const path = require("path") // Exportanto o path, para localizar pastas
const PORT = 3000 // Definindo o numero da porta

const app = express()


app.use(express.static(path.join(__dirname,"public"))) //Localizar a pasta desejada

app.get("/",(req,res)=>{ //Get tendo como resposta uma renderização do arquivo que eu desejar
	res.render("index")
})

app.listen(PORT,()=>{ //Iniciando o serividor com a porta desejada
	console.log(`Servidor iniciado na porta http://localhost:3000/`)
})