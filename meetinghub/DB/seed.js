var mongoose  = require("./connection");
var seedData  = require("./seeds");

var MeetingNote = mongoose.model("MeetingNote");

MeetingNote.remove({}).then(function(){
  MeetingNote.collection.insert(seedData).then(function(){
    process.exit();
  });
});
