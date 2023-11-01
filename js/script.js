// Function to normalize a string by converting it to toLowerCase and removing diacritics (accents, cedilla, ...) and extra spaces
function normalizeString(text) {
	return text
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.trim();
}

// Search hero function
function searchFunction() {
	let i, txtValue, h5, match;
	const input = document.getElementById("searchInput");
	const query = normalizeString(input.value);
	const heroContainer = document.getElementById("heroesList");
	const heroesList = heroContainer.getElementsByClassName("item");

	match = false;
	for (i = 0; i < heroesList.length; i++) {
		h5 = heroesList[i].getElementsByTagName("h5")[0];
		txtValue = h5.textContent || h5.innerText;

		if (normalizeString(txtValue).includes(query)) {
			heroesList[i].style.display = "";
			match = true;
		} else {
			heroesList[i].style.display = "none";
		}
	}

	const noMatchMessage = document.getElementById("noMatchMessage");
	if (!match) {
		noMatchMessage.style.display = "block";
	} else {
		noMatchMessage.style.display = "none";
	}

	// Scroll to the contact section
	const contactSection = document.getElementById("heroes");
	if (contactSection) {
		contactSection.scrollIntoView({ behavior: "smooth" });
	}
}

// Function to reset search when the input value is cleared
document.getElementById("searchInput").addEventListener("input", function () {
	if (this.value === "") {
		let items = document.getElementsByClassName("item");
		for (var j = 0; j < items.length; j++) {
			items[j].style.display = "block";
		}
		document.getElementById("noMatchMessage").style.display = "none";
	}
});
