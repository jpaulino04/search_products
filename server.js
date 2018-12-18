const express           = require('express'),
      app               = express(),
      bodyParser        = require('body-parser'),
      methodOverride    = require('method-override'),
      mysql             = require('mysql'),
      db                = require('./config/config'),
      faker             = require('faker'),
      port              = 3008; 
          
//ROUTES:
var main_route = require('./routes/main');



//view engine
app.set(process.env.PORT || port);
// app.use(express.static(__dirname, '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(methodOverride("_method"));

app.use(main_route);


// app.use((req, res, next) => {
//     res.locals.pool = pool;
//     next();
// })



app.listen(port, function(){
    console.log('Running on port '+ port);
})




