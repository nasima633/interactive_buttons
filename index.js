
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.parentElement;

        const details = card.querySelector(".ul-div");

        if (details.style.display === "none") {

            details.style.display = "block";
            button.value = "Hide Details";

        } else {

            details.style.display = "none";
            button.value = "View Details";

        }

    });

});