const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT||3000
app.use(express.static('public'));
// Serve the notes.html file on the GET /notes route
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname , '/public/notes.html'));
});
const readDB=()=>{
    try{
        return JSON.parse(fs.readFileSync('./db.json'))
    }catch(e){console.log(e)}
}
const writeDB =(data)=>{
    try{
        fs.writeFileSync ("./db.json", JSON.stringify(data))
    }catch(e){console.log(e)}
}
app.get("/api/notes",(req, res)=>{
    const dbDATA = readDB()
    console.log(dbDATA)
    res.json(dbDATA)
}) 

// Serve the index.html file on all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname , '/public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});