var express = require('express'),
    db      = require('../config/config'),
    mysql   = require('mysql'),
    faker   = require('faker'),
    router  = express.Router();

var pool = mysql.createPool(db.db);  
router.get('/', (req, res) => {
    
var q = 'INSERT INTO companies (name, city) VALUES ("Brianda Paulino", "Queens")'
    pool.query(q, (err, result) => {
        if(err) throw err;
        res.json({result: result})
    })    

})


router.get('/users', (req, res) => {
    var q = 'SELECT * FROM companies'
    pool.query(q, (err, data) => {
        if(err) throw err;
        res.json({data: data})
    })
})

router.get('/update', (req, res) => {
    var q = 'UPDATE companies SET name = "ONEY" WHERE ID=1'
    console.log(q)
    pool.query(q, (err, data) => {
        if(err) throw err;
        res.json({data: data})
    })
})


router.get('/insert', (req, res) => {
    var names = [];
    var cities = []
    for(let i = 0; i < 10; i++){
        names.push(faker.name.findName())
        cities.push(faker.address.city())
    }

   
    for( var t = 0; t <= names.length-1; t++){        
        var q = "INSERT INTO companies (name, city) VALUES (\""+names[t]+"\",\""+cities[t]+",\") "
        console.log(q)
        pool.query(q, (err, data) => {
            if(err) throw err;                     
        })  
    }
    res.send({sucess: true})
})

    
module.exports = router;