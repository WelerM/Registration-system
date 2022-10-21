const { response } = require('express')
const express = require('express')
const Datastore = require('nedb')
const app = express()
app.listen(4000, () => console.log('http://localhost:4000/'))
app.use(express.static('public'))//Links with index.html
app.use(express.json({ limit: '1mb' }))
const database = new Datastore('database.db')
database.loadDatabase()

//Data query
var dados = ''

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


/* const obj = req.body
const mes = obj.mês
obj.mês = new RegExp(mes)

database.find(obj, (err, data) => {
    if (err) {
        res.end()
        return
    }
    res.json(data)
    console.log(data);
}) */


// test.replace(/\"/g, "")



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


//===============================================
//===============================================
//===============================================


//Data entry
app.post('/api', (req, res) => {
    const data = req.body
    // console.log(req.body);
    res.json(data)//Not using it results in Uncaught (in promise) TypeError: NetworkError when attempting to fetch resource.  
    //console.log(data);//Logs in SERVIDOR
    database.insert(data)

})










