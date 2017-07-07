var express  = require("express");
var parser   = require("body-parser");
var hbs      = require("express-handlebars");
var mongoose = require("./db/connection");

var app = express();

var MeetingNote = mongoose.model("MeetingNote");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.json());

app.get("/api/meetingnotes", function(req, res){
  MeetingNote.find({}).then(function(meetingnotes){
    res.json(meetingnotes)
  });
});

app.get("/api/meetingnotes/:title", function(req, res){
  MeetingNote.findOne({title: req.params.title}).then(function(meetingnote){
    res.json(meetingnote)
  });
});

app.post("/api/meetingnotes", function(req, res){
  MeetingNote.create(req.body).then(function(meetingnote){
    res.json(meetingnote)
  })
});


app.delete("/api/meetingnotes/:title", function(req, res){
  MeetingNote.findOneAndRemove({title: req.params.title}).then(function(){
    res.json({ success: true })
  });
});

app.put("/api/meetingnotes/:title", function(req, res){
  MeetingNote.findOneAndUpdate({title: req.params.title}, req.body, {new: true}).then(function(meetingnote){
    res.json(meetingnote)
  });
});

app.get("/*", function(req, res){
  res.render("layout-main");
});

app.listen(app.get("port"), function(){
  console.log("Hurray...we are online!");
});
