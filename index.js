const { response } = require('express')
const express = require('express')
const Datastore = require('nedb')
const app = express()
app.listen(3005, () => console.log('listening at 3000'))
app.use(express.static('public'))//Links with index.html
app.use(express.json({ limit: '1mb' }))


const database = new Datastore('database.db')
database.loadDatabase()

/* const data = {
    mês: 'janeiro', dia: [
        [//01
            {
                name: 'joni',
                cpf: '040.488.480.09',
                andar: '5°',
                hora: '12:25',
                data: '02/09/2022'
            }
      
        ]
    ]
}
 */
//database.insert()





app.get('/api', (req, res) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end()
            return
        }
        res.json(data)//sents data to frontend



        /*         const data_1 = JSON.stringify(data)
             clear   const data_2 = JSON.parse(data_1)
                res.json(data_2[0].name) */
    })
})




app.post('/api', (req, res) => {
    const data = req.body

    // console.log(req.body);
    res.json({})
   console.log(data);

    database.insert(data)


})