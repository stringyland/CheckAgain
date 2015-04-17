
var masterList = $('.m-master');
var masterButtons = $('.m-master li button');
var masterTools = $('#ca-master-tools');
var listTools = $('#ca-list-tools');
var listButtons = $('.m-list li button');
var editMaster = $('#ca-edit-master');
var editList = $('#ca-edit-list');
var backToMaster = $('#ca-back-master');
var editTextA = "Edit";
var editTextB = "Done";

$(document).ready(function() {
// add anything that's js-dependant

// remove anything that's replaced by js-dependant stuff



$(editMaster).click(function(event) {
	$(masterButtons).toggleClass('hidden');
	$(editMaster).toggleClass('js-is-editing');
	if ($(editMaster).hasClass('js-is-editing')) {
		$(editMaster).text("Finish editing");
	} else {
		$(editMaster).text("Edit Master list");
	}
});
$(editList).click(function(event) {
	$(listButtons).toggleClass('hidden');
	$(editList).toggleClass('js-is-editing');
	if ($(editList).hasClass('js-is-editing')) {
		$(editList).text("Finish editing");
	} else {
		$(editList).text("Edit this list");
	}
});

		// if delete button
			// delete function: this list/item
		// if move button
			// move function: this list/item
		// if add button
			// add function: context list or item
		
	// if back button
	$('#ca-back-master').click(function(event) {
		event.preventDefault();
		masterList.removeClass('hidden');
		$('div.l-list').each(function(i) {
			if ($(this).hasClass('hidden') == false) {
				$(this).addClass('hidden');
			}
		});
		switchTools();
	});
	// if list title
	$( "ul.m-master li a" ).click(function(event) {
		//get which link
		var whichID = this.id;
		// do function
		showList(whichID);
	});

	// if settings
		// load function: settings
		
function showList(whichTitle) {
	//turn title id into list id
	var stringArray = whichTitle.split('-'); //ca-ml-X, we want to find out X
	var listIdentifier = stringArray[2];
	var whichList = "#ca-list-" + listIdentifier;
	
	// show that list, hide master
	$(whichList).removeClass('hidden');
	masterList.addClass('hidden');
	
	switchTools();	
}

function toggleEditButtons(whichSet) {
	if (whichSet = "master") {
		$(masterList + ' > li > button').toggleClass('hidden');
	} else {
		//figure out which list or do all?
	}
}

function toggleEditText(whichLink) {
	if (whichLink = "master") {
		//toggle A and B
	} else {
		//ugh lists
	}
}

function switchTools(){
	listTools.toggleClass('hidden');
	masterTools.toggleClass('hidden');
}


});

