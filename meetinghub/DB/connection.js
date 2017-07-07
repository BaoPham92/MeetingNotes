var mongoose = require("mongoose")

var MeetingNoteSchema = new mongoose.Schema(
  {
    name: String,
    title: String,
    description: String,
    datecreated: Date,
    meetinghub: String
  }
);

mongoose.model("MeetingNote", MeetingNoteSchema);
mongoose.connect("mongodb://localhost/meetingnote");

module.exports = mongoose;
