// main.js

const navbarToggler = document.getElementById("navbar-toggler");
const dashboardModal = document.getElementById("dashboard-modal");
const profileDropdownObj = document.getElementById("profile-dropdown");

const dropdowns = document.getElementsByClassName("dropdown-toggle");

for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", (e) => {
        const linkedDropdown = document.getElementById(e.target.getAttribute("nav-target"));

        if (linkedDropdown.classList.contains("show")) {
            linkedDropdown.classList.remove("show");
        } else {
            linkedDropdown.classList.add("show")
        }
    })
}

// When the navbarToggler is clicked, show and hide the navbar content.
navbarToggler.addEventListener("click", function () {
    //
    const content = this.nextElementSibling.children[1];
    const dropdownMenus = document.getElementsByClassName("dropdown-menu") 

    // If the collapsable div doesnt have inline maxHeight styling, show it. If it does, hide it.
    if (content.classList.contains("expanded")) {
        content.classList.remove("expanded");

        // Hide any dropdowns
        for (var i = 0; i < dropdownMenus.length; i++) {
            dropdownMenus[i].style.opacity = 0;
        }
    } else {
        content.classList.add("expanded");

        // Show any dropdowns
        for (var i = 0; i < dropdownMenus.length; i++) {
            dropdownMenus[i].style.opacity = 1;
        }
    }
});

// When the dashboard modal is clicked outside of the dashboard box, hide it.
dashboardModal.addEventListener("click", function (e) {
    if (dashboardModal.style.display == "flex" && e.target == dashboardModal) {
        toggleModal();
    }
});

// Show or hide the main modal when clicked.
function toggleModal() {
    if (dashboardModal.style.display == "flex") {
        dashboardModal.style.display = "none";
    } else {
        dashboardModal.style.display = "flex";
    }
}

// Add event listeners for the profile dropdown object when the mouse hovers out of it.
profileDropdownObj.addEventListener("mouseleave", function () { 
    profileDropdown(); 
});

function profileDropdown() {
    if (profileDropdownObj.style.opacity == 1) {
        profileDropdownObj.style.opacity = 0;
        profileDropdownObj.style.pointerEvents = "none";
    } else {
        profileDropdownObj.style.opacity = 1;
        profileDropdownObj.style.pointerEvents = "all";
    }
}

// Check the no. of characters in a textarea.
function checkCharacters(textArea) {
    document.getElementById("character-count").innerHTML = (200 - textArea.value.length).toString();
}