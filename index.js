
/* I'm still working here to both organize and lean it*/

/* const { response } = require('express') */
const express = require('express')
const Datastore = require('nedb')
const app = express()
app.listen(4000, () => console.log('http://localhost:4000/'))
app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }))
const database = new Datastore('database.db')
database.loadDatabase()


//Data query
var dados = ''




//Inserts data from inputs to database
app.post('/insertToDatabase', (req, res) => {
    const data = req.body
    res.json(data)
    database.insert(data)

})

/*Return data that matches with choosen day*/ 
app.get('/dia', (req, res) => {
    //Filtered data to be sent to front end
    database.find({}, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)//sents data to frontend
    })
})




//Quick search by name
app.post('/porNome', (req, res) => {
    const obj = req.body
    const name = obj.name
    obj.name = new RegExp(name)
    database.find(obj, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
        dados = data
    })
})
app.get('/porNome', (req, res) => {
    res.json(dados)
})



//Quick search by doc
app.post('/porDoc', (req, res) =>{
    const obj = req.body
    const doc = obj.documento
    obj.documento = new RegExp(doc)
    database.find(obj, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
        dados = data
    })
})
app.get('/porDoc', (req, res) => {
    res.json(dados)
})


//====== STATISTIC DAY =======//
var dayy = ''
app.post('/statistic_day', (req,res) =>{
    const obj = req.body
    const day = obj.data
    obj.data = new RegExp(day)
    database.find(obj, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
        dayy = data
    })
})
app.get('/statistic_day', (req, res) =>{
    res.json(dayy)
})


//====== STATISTIC MONTH =======//
var monthh = ''
app.post('/statistic_month', (req,res) =>{
    const obj = req.body
    const month = obj.mês
    obj.mês = new RegExp(month)
    database.find(obj, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
        monthh= data
    })
})
app.get('/statistic_month', (req, res) =>{
        res.json(monthh)
})


//====== STATISTIC TOTAL =======//
app.get('/statistic_total', (req,res) =>{
    database.find({}, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})




//====== REASSIGN GUEST =======//
app.post('/ReAssignGuest',( req,res) =>{
    const data = req.body
   // res.json(data)
    database.insert(data)
})





//======== SEARCH BY MONTH ==========//
app.get('/janeiro', (req, res) => {
    database.find({ mês: "janeiro" }, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})
app.get('/fevereiro', (req, res) => {
    database.find({ mês: "fevereiro" }, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})

app.get('/marco', (req, res) => {
    database.find({ mês: "março" }, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})

app.get('/abril', (req, res) => {
    database.find({ mês: "abril" }, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})

app.get('/maio', (req, res) => {
    database.find({ mês: "maio" }, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})

app.get('/junho', (req, res) => {
    database.find({ mês: "junho" }, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})

app.get('/julho', (req, res) => {
    database.find({ mês: "julho" }, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})

app.get('/agosto', (req, res) => {
    database.find({ mês: "agosto" }, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})

app.get('/setembro', (req, res) => {
    database.find({ mês: "setembro" }, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})

app.get('/outubro', (req, res) => {
    database.find({ mês: "outubro" }, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})

app.get('/novembro', (req, res) => {
    database.find({ mês: "novembro" }, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})

app.get('/dezembro', (req, res) => {
    database.find({ mês: "dezembro" }, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})
