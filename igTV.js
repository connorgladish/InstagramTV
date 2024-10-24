document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM content loaded");
    const photoGrid = document.getElementById("photoGrid");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    const photoBank = [
        "agLife/agLife68.jpg",
        "agLife/agLife69.jpg",
        "agLife/agLife69.jpg",
        "agLife/agLife70.jpg",
        "agLife/agLife72.jpg",
        "agLife/agLife73.jpg",
        "agLife/agLife74.jpg",
        "agLife/agLife75.jpg",
        "agLife/agLife77.jpg",
        "agLife/agLife79.jpg",
        "agLife/agLife80.jpg",
        "agLife/agLife81.jpg",
        "agLife/agLife82.jpg",
        "agLife/agLife83.jpg",
        "agLife/agLife84.jpg",
        "agLife/agLife85.jpg",
        "agLife/agLife87.jpg",
        "agLife/agLife88.jpg",
        "agLife/agLife89.jpg",
        "agLife/agLife90.jpg",
        "agLife/agLife91.jpg",
        "agLife/agLife92.jpg",
        "agLife/agLife93.jpg",
        "agLife/agLife94.jpg",
        "agLife/agLife95.jpg",
        "agLife/agLife96.jpg",
        "agLife/agLife97.jpg",
        "agLife/agLife98.jpg",
        "agLife/agLife99.jpg",
        "agLife/agLife100.jpg",
        "agLife/agLife101.jpg",
        "agLife/agLife102.jpg",
        "agLife/agLife103.jpg",
        "agLife/agLife104.jpg",
        "agLife/agLife105.jpg",
        "agLife/agLife106.jpg",
        "agLife/agLife107.jpg",
        "agLife/agLife108.jpg",
        "agLife/agLife109.jpg",
        "agLife/agLife110.jpg",
        "agLife/agLife111.jpg",
        "agLife/agLife112.jpg",
        "agLife/agLife113.jpg",
        "agLife/agLife114.jpg",
        "agLife/agLife115.jpg",
        "agLife/agLife116.jpg",
        "agLife/agLife117.jpg",
        "agLife/agLife118.jpg",
        "agLife/agLife119.jpg",
        "agLife/agLife120.jpg",


        "agriculture/agr72.jpg",
        "agriculture/agr73.jpg",
        "agriculture/agr74.jpg",
        "agriculture/agr75.jpg",
        "agriculture/agr76.jpg",
        "agriculture/agr77.jpg",
        "agriculture/agr78.jpg",
        "agriculture/agr79.jpg",
        "agriculture/agr80.jpg", 
        "agriculture/agr81.jpg",
        "agriculture/agr82.jpg",
        "agriculture/agr83.jpg",
        "agriculture/agr84.jpg",
        "agriculture/agr85.jpg",
        "agriculture/agr86.jpg",
        "agriculture/agr87.jpg",
        "agriculture/agr88.jpg",
        "agriculture/agr89.jpg",
        "agriculture/agr90.jpg",
        "agriculture/agr91.jpg",
        "agriculture/agr92.jpg",
        "agriculture/agr93.jpg",
        "agriculture/agr94.jpg",
        "agriculture/agr95.jpg",
        "agriculture/agr96.jpg",
        "agriculture/agr97.jpg",
        "agriculture/agr98.jpg",
        "agriculture/agr99.jpg",
        "agriculture/agr100.jpg",
        "agriculture/agr101.jpg",
        "agriculture/agr102.jpg",
        "agriculture/agr103.jpg",
        "agriculture/agr104.jpg",
        "agriculture/agr105.jpg",
        "agriculture/agr106.jpg",
        "agriculture/agr107.jpg",
        "agriculture/agr108.jpg",
        "agriculture/agr109.jpg",
        "agriculture/agr110.jpg",
        "agriculture/agr111.jpg",
        "agriculture/agr112.jpg",
        "agriculture/agr113.jpg",
        "agriculture/agr114.jpg",
        "agriculture/agr115.jpg",
        "agriculture/agr116.jpg",
        "agriculture/agr117.jpg",
        "agriculture/agr118.jpg",
        "agriculture/agr119.jpg",
        "agriculture/agr120.jpg",

        
        "farmlife/farmlife73.jpg",
        "farmlife/farmlife74.jpg",
        "farmlife/farmlife75.jpg",
        "farmlife/farmlife76.jpg",
        "farmlife/farmlife77.jpg",
        "farmlife/farmlife79.jpg",
        "farmlife/farmlife80.jpg",
        "farmlife/farmlife81.jpg",
        "farmlife/farmlife82.jpg",
        "farmlife/farmlife83.jpg",
        "farmlife/farmlife84.jpg",
        "farmlife/farmlife85.jpg",
        "farmlife/farmlife86.jpg",
        "farmlife/farmlife87.jpg",
        "farmlife/farmlife88.jpg",
        "farmlife/farmlife89.jpg",
        "farmlife/farmlife90.jpg",
        "farmlife/farmlife91.jpg",
        "farmlife/farmlife92.jpg",
        "farmlife/farmlife93.jpg",
        "farmlife/farmlife94.jpg",
        "farmlife/farmlife95.jpg",
        "farmlife/farmlife96.jpg",
        "farmlife/farmlife97.jpg",
        "farmlife/farmlife98.jpg",
        "farmlife/farmlife99.jpg",
        "farmlife/farmlife100.jpg",
        "farmlife/farmlife101.jpg",
        "farmlife/farmlife102.jpg",
        "farmlife/farmlife103.jpg",
        "farmlife/farmlife104.jpg",
        "farmlife/farmlife105.jpg",
        "farmlife/farmlife106.jpg",
        "farmlife/farmlife107.jpg",
        "farmlife/farmlife108.jpg",
        "farmlife/farmlife109.jpg",
        "farmlife/farmlife110.jpg",
        "farmlife/farmlife111.jpg",
        "farmlife/farmlife112.jpg",
        "farmlife/farmlife113.jpg",
        "farmlife/farmlife114.jpg",
        "farmlife/farmlife115.jpg",
        "farmlife/farmlife116.jpg",
        "farmlife/farmlife117.jpg",
        "farmlife/farmlife118.jpg",
        "farmlife/farmlife119.jpg",
        "farmlife/farmlife120.jpg",

        "misc/misc1.jpeg",
        "misc/misc2.jpeg",
        "misc/misc3.jpeg",
        "misc/misc4.jpeg",
        "misc/misc5.jpeg",
        "misc/misc6.jpeg",
        "misc/misc7.jpeg",
        "misc/misc8.jpeg",
        "misc/misc9.jpeg",
        "misc/misc10.jpeg",
        "misc/misc11.jpeg",
        "misc/misc12.jpeg",
        "misc/misc13.jpeg",
        "misc/misc14.jpeg",
        "misc/misc15.jpeg",
        "misc/misc16.jpeg",
        "misc/misc17.jpeg",
        "misc/misc18.jpeg",
        "misc/misc20.jpeg",
        "misc/misc21.jpeg",
        "misc/misc22.jpeg",
        "misc/misc23.jpeg",
        "misc/misc24.jpeg",
        "misc/misc25.jpeg",
        "misc/misc26.jpeg",
        "misc/misc27.jpeg",
        "misc/misc28.jpeg",
        "misc/misc29.jpeg",
        "misc/misc30.jpeg",
        "misc/misc31.jpeg",
        "misc/misc32.jpeg",
        "misc/misc33.jpeg",
        "misc/misc34.jpeg",
        "misc/misc35.jpeg",
        "misc/misc36.jpeg",
        "misc/misc37.jpeg",
        "misc/misc38.jpeg",
        "misc/misc39.jpeg",
        "misc/misc40.jpeg",
        "misc/misc41.jpeg",
        "misc/misc42.jpeg",
        "misc/misc43.jpeg",
        "misc/misc44.jpeg",
        "misc/misc45.jpeg",
        "misc/misc46.jpeg",
        "misc/misc47.jpeg",
        "misc/misc48.jpeg",
        "misc/misc49.jpeg",
        "misc/misc50.jpeg",
        "misc/misc51.jpeg",
        "misc/misc52.jpeg",
        "misc/misc53.jpeg",
        "misc/misc54.jpeg",
        "misc/misc55.jpeg",
        "misc/misc56.jpeg",
        "misc/misc57.jpeg",
        "misc/misc58.jpeg",
        "misc/misc59.jpeg",
        "misc/misc60.jpeg",
        "misc/misc61.jpeg",
        "misc/misc62.jpeg",

    ];

    // Set timeout and refresh function
let timeoutId;

document.addEventListener("touchmove", function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

function startTimeout() {
    timeoutId = setTimeout(() => {
        window.location.reload();
    }, 35000); // 35 seconds
}

function resetTimeout() {
    clearTimeout(timeoutId);
    startTimeout();
}

// Call startTimeout to begin the countdown
startTimeout();

 // Event listeners to reset timeout on user interaction
 document.addEventListener("mousemove", resetTimeout);
 document.addEventListener("keydown", resetTimeout);
 document.addEventListener("touchstart", resetTimeout);

       // Shuffle the photo array
    shuffleArray(photoBank);

    // Function to shuffle array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

   // Function to display photos
function displayPhotos() {
    for (let i = 0; i < photoBank.length; i++) {
        const photoElement = document.createElement("img");
        photoElement.src = photoBank[i];
        photoElement.alt = "Random Photo";
        photoElement.classList.add("photo");
        photoElement.addEventListener("click", (event) => {
            handlePhotoClick(i); // Pass the index of the clicked photo
        });
        photoGrid.appendChild(photoElement);
    }
}

// Function to handle the click event on a photo
function handlePhotoClick(index) {
    currentIndex = index; // Update currentIndex with the index of the clicked photo
    lightboxImage.src = photoBank[currentIndex];
    lightbox.style.display = "flex";

    // Listen for swipe events
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
}

    function closeLightbox() {
        lightbox.style.display = "none";

        document.removeEventListener("keydown", handleKeyPress);
        document.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchmove", handleTouchMove);
    }

    // Function to handle key press events
    function handleKeyPress(event) {
        if (event.key === "ArrowRight") {
            showNextPhoto();
        } else if (event.key === "ArrowLeft") {
            showPreviousPhoto();
        }
    }

    // Functions to handle touch events for swipe
    let touchStartX = 0;
    let touchEndX = 0;

    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        touchEndX = event.touches[0].clientX;
        handleSwipe();
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const deltaX = touchEndX - touchStartX;

        if (deltaX > swipeThreshold) {
            showPreviousPhoto();
        } else if (deltaX < -swipeThreshold) {
            showNextPhoto();
        }
    }

    // Function to show the next photo
    function showNextPhoto() {
        currentIndex = (currentIndex + 1) % photoBank.length;
        lightboxImage.src = photoBank[currentIndex];
    }

    // Function to show the previous photo
    function showPreviousPhoto() {
        currentIndex = (currentIndex - 1 + photoBank.length) % photoBank.length;
        lightboxImage.src = photoBank[currentIndex];
    }

    displayPhotos();

     // Close lightbox when clicking outside the image
     lightbox.addEventListener("click", closeLightbox);
     // Prevent lightbox from closing when clicking on the image itself
     lightboxImage.addEventListener("click", (event) => {
         event.stopPropagation();
     });

     startTimeout();

});
    
