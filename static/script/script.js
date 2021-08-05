// TODO: show home page at the first time load page

// Shows one page and hides the other two
function showSection() {

	// Hide all of the contents
	document.querySelectorAll('.content').forEach(content => {
		content.style.display = 'none';
	});

	// Show the section provided in the argument
	document.querySelector(`#math`).style.display = 'block';
}

// Wait for page to loaded:
document.addEventListener('DOMContentLoaded', function() {

	// Select all buttons
	document.querySelectorAll('a').forEach(a => {

		// When a button is clicked, switch to that page
		a.onclick = function() {
	    	showSection(this.dataset.page);
		}
	})
});