//dados
const proffys = [
    { 
        name: "Diego Fernandes", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "8999999999", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220] 
    },
    { 
        name: "Gabriel Roos", 
        avatar:"https://avatars3.githubusercontent.com/u/54591029?s=460&u=5e62c8d4cc937cb5f3d53fb78f9834d5e3b444ef&v=4", 
        whatsapp: "8999999999", 
        bio: "Matemático visionario buscando o melhor do seu aluno.<br><br>Sempre buscando pelo melhor e auxiliando os outros a encontrar felicidade no que fazem, Gabriel apresenta um sistema de aulas eficazes que tornam a pessoa muito mais capaz de alcançar seus objetivos.", 
        subject: "Matemática", 
        cost: "15", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220] 
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",

]

const weekdays = [

    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",

]
//funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
     const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    // [name, avatar, bio, ...] if there's nothing []
    const isNotEmpty = Object.keys(data).length > 0
    if  (isNotEmpty) {

        data.subject = getSubject(data.subject)

        //add data to proffy's list
        proffys.push(data)

        return res.redirect("/study")
    }
   
    // se n, n add e mostrar a pg
    return res.render("give-classes.html", { subjects, weekdays })
}

const express = require('express')
const server = express()


//config nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))
//rotas de app
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)