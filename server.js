import express from 'express';

const app = express();
app.set("view engine", "ejs");
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello, web!");
});

app.get('/about', (req,res) => {
    res.render("about", {title: "About: "});
})

app.get("/status", (req, res)=>{
    res.json({status: "ok", uptime: process.uptime()})
})

app.get("/greet/:name", (req, res)=>{
    const name = req.params.name;
    res.send(`Hello ${name}`)
})

app.get("/repeat/:word", (req, res)=>{
    const word = req.params.word;
    res.send(`${word} ${word} ${word}`)
})

app.get("/count", (req, res) => {
    const from = req.query.from || 1;
    const to = req.query.to || 10;
    res.send(`Counting from ${from} to ${to}`)
})


app.use((req, res) => {
    res.status(404).send("Page not found")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})

