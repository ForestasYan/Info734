const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

/*const connectDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true, useUnifiedTopology : true}).then(
        () => {
            console.log(`Connected to database`)
            
        },
        error => {
            console.error(chalk.red(`Connection error: ${error.stack}`))
            process.exit(1)
        }
    )
  }
  
  connectDb().catch(error => console.error(error))*/

  

  app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})