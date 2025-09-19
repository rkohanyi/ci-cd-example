import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(8080, () => {
    console.log("App is listening on port 8080")
})
