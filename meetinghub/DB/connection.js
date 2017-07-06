var mongoose = require("mongoose")

var MeetingNoteSchema = new mongoose.Schema(
  {
Name: String,
Title: String,
Description: String,
DateCreated: String,
Meetinghub: String
  }
);

mongoose.model("MeetinghNote", MeetingNoteSchema);
mongoose.connect("mongodb://localhost/meetingnote");

module.exports = mongoose;
