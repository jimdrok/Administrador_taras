const express = require('express');
const morgan = require('morgan');
const path = require('path')
const { use } = require('./routes/taskRoutes');
const app = express();
const { mongoose} = require('./database')
//Settings
app.set('port' , process.env.PORT || 3000 )

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes 
app.use('/task' , require('./routes/taskRoutes'))
// Starric Files
app.use(express.static(path.join(__dirname , 'public')))
// Starting the server



app.listen( app.get('port'), ()=>{
  console.log(`Puerto ${app.get('port')}`)
})