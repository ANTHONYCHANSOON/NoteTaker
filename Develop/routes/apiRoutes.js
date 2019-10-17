var notes = require("../db/notes");

module.exports = function(app){
    
    app.get("/api/notes", function(req,res){
        res.json(notes);
    });

    // app.post("/api/notes", function(req,res){
    //     let newnotes = req.body;
    //     console.log(req.body);
        
    // })
    app.post("/api/tabless",function(req.res){
        let newnotes = req.body;
        notes.push(newnotes);
        res.json(notes);
    })
}