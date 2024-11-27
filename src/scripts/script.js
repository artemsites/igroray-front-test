console.log("artemsites");

document.addEventListener("DOMContentLoaded", function () {
	try {
		const form = document.getElementById("form");
		const inputName = document.getElementById("inputName");



		form.addEventListener("submit", function (e) {
			e.preventDefault();
		});

		inputName.addEventListener("input", updateDataFilled);



		function updateDataFilled() {
			if (inputName.value.trim() !== "") {
				inputName.setAttribute("data-filled", "true");
			} else {
				inputName.removeAttribute("data-filled");
			}
		}

	} catch (err) {
		console.error("TRY-CATCH ERROR: ", err);
	} finally {
	}
});
