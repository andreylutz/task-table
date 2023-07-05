const express = require('express')

const app = express()
const mainConfig = require('./config/mainConfig')

const mainRouter = require('./routes/main.routes')

const usersRouter = require('./routes/users.routes')

mainConfig(app)

app.use('/', mainRouter)
app.use('/api/users', usersRouter)

// ===>server
const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log(`Server started PORT: ==>${PORT}<==`)
});