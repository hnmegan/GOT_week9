(() => {
	console.log('fired!');

	//variable stack -> get the shields/ 

	const sigils = document.querySelectorAll('.sigilContainer'),
		lightBox = document.querySelector('.lightbox'),
		closeButton = document.querySelector('.close-lightbox');

	function popLightBox() {
		// debug this so far and make sure the event handling works
		//debugger;

		lightBox.classList.add('show-lightbox');
	}

	function closeLightBox(event) {
		event.preventDefault();
		//make the lightbox close
	lightBox.classList.remove('show-lightbox');
	}

	sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
	closeButton.addEventListener("click", closeLightBox);
})();
