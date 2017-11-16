// 7. If it has been completed, remove the to-do list item
// (in practice, select each to-do list item could be select completed to-do list items if you're using a class to style a completed item)

// 8. Select the to-do list counter element
// Set the text inside the to-do list counter element to the number of items in the to-do list
// --------------------


// 1. When the user submits their to-do list item
// Select the input field the user has typed their to-do list info into
// Get the value of the input field
// Create a list item
// Place the text inside of the list item
// Append the list item to our ordered to-do list

$(document).ready(function($){

	// Add Item to the TODO List
	$('#addTodoList').submit(addToDoListItem);
	$('#clearList').click(emptyToDoList);
	$('#clearCompletedList').click(removeCompletedToDoListItems);
	$('#todos').click(updateNumberOfToDoListItems);
	$('#todos').on('click', '.remove', removeToDoListItem);
	$('#todos').on('click', '.edit', editToDoListItem);
	$('#todos').on('blur', '.editor', saveEditedToDoListItem);
	$('#todos').on('click', 'li', markToDoListItemAsCompleted);
	

	// API Functions
	function addToDoListItem() {

		//Get the value of the input field
		var item = $('#addTodoItem').val();

	// Append the item to the unordered list
		$('#todos').append('<li><span class="item">'+item+'</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');	
	updateNumberOfToDoListItems()

	}
		
	

// 2. When the user clicks remove next to a to do list item

// Select the to-do list item the user wants to remove
// Delete the selected item from the page

	function removeToDoListItem(){
		$(this).parents('li').remove();
	}

// 3. When the user clicks the edit button next to a list item

// Select the to-do list item the user wants to edit
// Replace the text in the list item with an input whose value is the same as the existing text
// Show the save edit button and hide the edit button	

	function editToDoListItem(){
		var editClicked = $(this).parents('li');
		var itemContent = $(this).siblings('.item').text();

		

		$(editClicked).html('<form class="editor" action=""><input type="text" value="'+itemContent+'"/></form>');
	}

// 4. When the user clicks the save edit button

// Select the to-do list item the user wants to save
// Get the value of the input inside of this item
// Replace the input in the list item with the value of the input field
// (if using check box method, there is nothing to do) If using line-through method:

	function saveEditedToDoListItem(){

		var newItem = $(this).find('input').val();
		var listItem = $(this).parents('li');
		$(listItem).html('<span class="item">'+newItem+'</span><a class="edit">Edit</a><a class="remove">Remove</a>');

	}

// 5.(if using check box method, there is nothing to do) If using line-through method:
// When the user clicks on the list item
// Get the to-do list item the user clicked on
// Add a css line-through style to the item
// When the user clicks the Clear List button	

// Select the list
// Empty the list Optional: Store the emptied list to allow the user to go back.

	function markToDoListItemAsCompleted(){
		$(this).toggleClass('done');
		updateNumberOfToDoListItems()
	}


// 6. When the users clicks the Clear Completed button
// Select each to-do list item
// Check to see if it has been completed

	function emptyToDoList(){
		$('#todos').empty();
	}

	function removeCompletedToDoListItems(){
		$('.done').remove();
	}

	function updateNumberOfToDoListItems(){

		var count = $('#todos li').not('.done').length;
		$('#count').html(count);
	}

});
