const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors()) /*전체 허용 ()에 조건 넣을 수 있다.*/

/*get : http method , '/' : 라우팅, function~ : 콜백함수*/
app.get('/', function (req, res) {
    res.send('Hello World') /* 응담(res)에 Helloworld를 보낸다.*/
})

app.get('/user/:id', function (req, res) {
    const q = req.params
    console.log(q.id)
    res.json({'userid' : q.id})
})

app.get('/search/:inp', function(req, res){
    const q = req.query
    console.log(q)
    res.json({'inp':q.name})

})

app.get('/sound/:name', (req, res)=>{
    const { name } = req.params
    console.log(name)
    if(name == "dog"){
        res.json({"sound" : "멍멍" })
    }else if(name == "cat"){
        res.json({"sound" : "야옹" })
    }else{
        res.json({"sound" : "몰라"})
    }
    
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})