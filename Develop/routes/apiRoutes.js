var fs = require("fs");

let notesindb;

fs.readFile("./Develop/db/db.json", function (error, data) {

    if (error) {
        return console.log(error);
    }

    let parsedata = JSON.parse(data);
    //console.log(parsedata);
    notesindb = parsedata;
    console.log("notes in db = ", notesindb);

});

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(notesindb);
    });
    app.get("/assets/js/index.js", function(req,res){

    });


    // app.get("api/notes", function (req, res) {
    //     notesindb.push(req.body);
    //     res.json(notesindb);
    // })

    // app.post("/api/notes", (req,res) => {
    //     const newnote = {
            
    //     }
    // })

}