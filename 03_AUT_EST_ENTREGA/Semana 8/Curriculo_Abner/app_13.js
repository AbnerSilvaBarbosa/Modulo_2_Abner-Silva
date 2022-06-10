const { info } = require("console")
const express = require("express") // Exportanto o modulo do express
const path = require("path") // Exportanto o path, para localizar pastas
const PORT = 3000 // Definindo o numero da porta
const bodyParser = require("body-parser")

const sqlite = require("sqlite")
const { NOMEM } = require("dns")
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



//CRUD

//C - CREATE
app.post("/create",(req,res)=>{

	async function creDB(){
		const {nome,curso} = req.body
		const db = await sqlite.open({filename:"./database/bancoDeDados.db",driver:sqlite3.Database})

		db.run('INSERT INTO Abner (Nome,curso) VALUES (?,?)',[nome,curso])

		db.close()
	}

	creDB()

	res.status(200).json({
		message:"Adicionado no banco de dados"
	})

})

// R - READ

app.get("/read",(req,res)=>{

	async function redDB(){
		const db = await sqlite.open({filename:"./database/bancoDeDados.db",driver:sqlite3.Database})

		db.all(`SELECT * FROM Abner`).then((result)=>{
			res.send(result)
		})

		db.close()
	}

	redDB()



})

// U - Update

app.put("/update",(req,res)=>{
	async function uptDB(){
		const {curso,id_chave} = req.body
		const db = await sqlite.open({filename:"./database/bancoDeDados.db",driver:sqlite3.Database})

		let verify2
		const verify = await db.get("SELECT id FROM abner WHERE id = ?",[id_chave]).then((res)=>{
			verify2 = res
		})

		if(verify2 == undefined){
			res.status(400).json({message:"id não corresponde ao DB"})

		}else{
			const result = await db.run('UPDATE Abner SET curso = ? WHERE id = ?',[curso,id_chave])
			res.status(200).json({message:"Atualizado com sucesso"})

		}
		


		db.close()
	}

	uptDB()

	
})


//D - Delete
app.delete("/delete",(req,res)=>{
	async function delDB(){
		const db = await sqlite.open({filename:"./database/bancoDeDados.db",driver:sqlite3.Database})

		const {id_chave} = req.body

		let verify2
		const verify1 = await db.get("SELECT id FROM abner WHERE id = ?",[id_chave]).then((res)=>{
			verify2 = res
		})

		if(verify2 == undefined){
			res.status(400).json({message:"id não corresponde ao DB para ser deletado"})

		}else{
			db.run(`DELETE FROM Abner WHERE id = ?;`,[id_chave])
			res.status(200).json({message:"linha deletada com sucesso"})
			
		}

		

		db.close()
	}

	delDB()

	
	
})


app.listen(PORT,()=>{ //Iniciando o serividor com a porta desejada
	console.log(`Servidor iniciado na porta http://localhost:3000/`)
})