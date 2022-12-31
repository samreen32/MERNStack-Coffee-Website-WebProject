const connectToMongo = require('./db');
const express = require('express');  
const cors = require('cors');

connectToMongo();

const app = express();
//const port = 3000    ... only react app will run on port 3000.
const port = 5000    
app.use(cors());

app.use(express.json());    


//Available Routes
app.use('/api/auth', require('./routes/auth'));  

app.listen(port, () => {
  console.log(`Coffee Application backend listening on port ${port}`)
})