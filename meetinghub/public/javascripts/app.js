angular
	.module("meetingNote", [
"ui-router",
"ngResource"
	])
	.config([
		"$stateProvider"
		Router
		])
.factory("MeetingNote", [
"$resource",
MeetingNoteFactory
	])
	.controller("IndexController", [
		"MeetingNote",
		"$state",
		IndexController
		])

function MeetingNoteFactory($resource) {
	return $resource("/meetingNotes/:name", {}, {
		update: { method: "PUT" }
	})
}

function IndexController(MeetingNote, $state) {
	this.meetingnotes = MeetingNote.query()
	this.newMeetingNote = new MeetingNote()

	this.create = function() {
		this.newMeetingNote.$save().then( function(meetingnote){
			$state.go("show", {name: meetingnote.name})
		})
	}
}
