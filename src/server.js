const port = 3000
const express  = require("express")
const app = express()
const users = require("./mock-users")
const cors = require('cors')
app.use(cors())

app.get("/users", ((req, res) => {
    res.send(users)
}))

app.listen(port, () => {
    console.log("Server running at: ", port)
})