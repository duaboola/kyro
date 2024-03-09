// ------ Initial Animation -----
$(document).ready(function() {
    // After the page has loaded, trigger the animation
    setTimeout(function() {
        $(".zoomed-out").css("transform", "scale(1)"); // Set the image back to its original size
        $(".carousel-caption").css("bottom", "25%"); // Move the caption to the middle
        $("#navbar").fadeIn(); // Show the navbar after the transition
    }, 1000); // Change the delay time according to your needs
});






//------- Menu Tab --------

// $(document).ready(function() {
//     // Redirect when a tab is clicked
//     $('.nav-link').click(function(e) {
//         e.preventDefault();
//         window.location.href = $(this).attr('href');
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    // Get all tab links
    var tabLinks = document.querySelectorAll('.menu-tabs .nav-link');

    // Attach click event listeners to each tab link
    tabLinks.forEach(function(tabLink) {
        tabLink.addEventListener('click', function(event) {
            // Get the target ID from the data-target attribute
            var targetID = this.getAttribute('data-target');

            // Construct the URL with the selected tab ID
            var url = 'menu.html' + targetID;

            // Redirect to the constructed URL
            window.location.href = url;
        });
    });
});

function changeImage(tab) {
    var imageElement1 = document.getElementById(tab + "-image-1");
    var imageElement2 = document.getElementById(tab + "-image-2");
    var imagePath1 = "./assets/images/hero/menu/";
    var imagePath2 = "./assets/images/hero/menu/";

    switch (tab) {
        case 'food':
            imagePath1 += "f1.JPG";
            imagePath2 += "f2.JPG";
            break;
        case 'beverage':
            imagePath1 += "d1.jpg";
            imagePath2 += "d2.jpg";
            break;
        case 'hookah':
            imagePath1 += "h1.JPG";
            imagePath2 += "h2.jpg";
            break;
        default:
            break;
    }

    if (imageElement1 && imageElement2) {
        imageElement1.src = imagePath1;
        imageElement2.src = imagePath2;
    }
}



document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded");

    // Get all tab links
    var tabLinks = document.querySelectorAll('.menu-tabs .nav-link');

    // Get all tab panes
    var tabPanes = document.querySelectorAll('.menu-tabs .tab-pane');

    console.log("Found", tabLinks.length, "tab links and", tabPanes.length, "tab panes");

    // Add hover event listeners to tab links
    tabLinks.forEach(function(tabLink) {
        tabLink.addEventListener('mouseenter', function(event) {
            console.log("Tab link hovered:", this.textContent);

            // Remove 'active' class from all tab links
            tabLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            // Add 'active' class to the hovered tab link
            this.classList.add('active');

            // Hide all tab panes
            tabPanes.forEach(function(tabPane) {
                tabPane.classList.remove('active');
            });

            // Get the target tab pane
            var targetID = this.getAttribute('data-target');
            console.log("Target ID:", targetID);
            var targetPane = document.querySelector(targetID);

            // Show the target tab pane
            if (targetPane) {
                console.log("Showing target pane:", targetPane.id);
                targetPane.classList.add('active');
            } else {
                console.log("Target pane not found");
            }
        });
    });
});




// ------------ Gallery ------
// Open the modal
function openModal(imgSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = imgSrc;
  }
  
  // Close the modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Close the modal when clicking outside the image
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  