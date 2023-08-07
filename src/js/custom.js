const toggleButton = document.getElementById('toggleButton');
const toggleDiv = document.getElementById('toggleDiv');

toggleButton.addEventListener('click', () => {
	if (toggleDiv.style.display === 'none') {
		toggleDiv.style.display = 'block';
	} else {
		toggleDiv.style.display = 'none';
	}
});
