let exp = require('express')
let bodyp = require('body-parser')
let app = exp()
app.use(bodyp.json())


const cepPromise = require('cep-promise');
const _ = require('lodash');


const DEFAULT_TIME_BETWEEN_REQUESTS = 100


async function getCep(cep) {
    try {
        result = await cepPromise(cep)
        return result
    } catch (error) {
        return {cep:'erro',state:(error || {}).message}
    }

}

app.listen(80,function(){
    console.log('80')
})


app.get('/maps',function(req,res){
    res.send(JSON.stringify({nome: 'Lecio', id: '45'}))
    })

app.post('/getcep/', async function (req, res, next) {
        res.json(await getCep(req.body.cep))
        res.end();
    })





