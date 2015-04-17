
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
	
	
	// EDIT LINKS
	
	$(editMaster).click(function(event) {
		editMasterList();
	});
	$(editList).click(function(event) {
		editListList();
	});
	
	// BACK LINKS
	
	$('#ca-back-master').click(function(event) {
		//event.preventDefault();
		resetEditList();
		masterList.removeClass('hidden');
		$('div.l-list').each(function(i) {
			if ($(this).hasClass('hidden') == false) {
				$(this).addClass('hidden');
			}
		});
		switchTools();
	});
	
	// LIST LINKS
	$( "ul.m-master li a" ).click(function(event) {
		resetEditMaster();
		//get which link
		var whichID = this.id;
		// do function
		showList(whichID);
	});
	
	
	
	


});

// FUNCTIONS 
// ---------------------------

function editMasterList() {
	$(masterButtons).toggleClass('hidden');
	$(editMaster).toggleClass('js-is-editing');
	if ($(editMaster).hasClass('js-is-editing')) {
		$(editMaster).text("Finish editing");
	} else {
		$(editMaster).text("Edit Master list");
	}
}		

function resetEditMaster() {
	$(masterButtons).addClass('hidden');
	$(editMaster).removeClass('js-is-editing');
	$(editMaster).text("Edit Master list");
}

function resetEditList() {
	$(listButtons).addClass('hidden');
	$(editList).removeClass('js-is-editing');
	$(editList).text("Edit this list");
}
	
function editListList() {
	$(listButtons).toggleClass('hidden');
	$(editList).toggleClass('js-is-editing');
	if ($(editList).hasClass('js-is-editing')) {
		$(editList).text("Finish editing");
	} else {
		$(editList).text("Edit this list");
	}
}	

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