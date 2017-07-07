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
	.controller("ShowController", [
		"stateParams",
		"MeetingNote",
		"$state",
		ShowController
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

function ShowControllerFunc ($stateParams, MeetingNote, $state) {
	this.meetingnote = MeetingNote.get({name: $stateParams.name, title: $stateParams.title, description: $stateParams.description, dateCreated: $stateParams.dateCreated, Meetinghub: $stateParams.Meetinghub})
	this.update = function ( {
		$state.go("show", {name: MeetingNote.name})
	})
}

function Router ($stateProvider) {
	$stateProvider
		.state("index", {
		url: '/', 
		templateUrl: '/public/javascripts/ng-views/index.html',
		controller: "IndexController",
		controllerAs: "vm"
		})
		.state("show", {
		.url: '/meetingnotes/:name',
		templateUrl: '/public/javascripts/ng-views/show.html',
		controller: "ShowController",
		controllerAs: "vm"
	})
}