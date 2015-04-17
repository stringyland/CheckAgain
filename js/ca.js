
var masterList = $('#ca-master');
var masterTools = $('#ca-master-tools');
var listTools = $('#ca-list-tools');
var backToMaster = $('#ca-back-master');
var editTextA = "Edit";
var editTextB = "Done";

$(document).ready(function() {
// add anything that's js-dependant

// remove anything that's replaced by js-dependant stuff


// listen for click event
	// if edit button
	$('#ca-edit-master').click(function(event) {
		event.preventDefault();
		toggleEditButtons('master');
		toggleEditText('master');
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
		$(masterList + ' > button').toggleClass('hidden');
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

