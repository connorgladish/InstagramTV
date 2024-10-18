document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM content loaded");
    const photoGrid = document.getElementById("photoGrid");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    const photoBank = [
       /* "agLife/aglife1.png",
        "agLife/aglife2.png",
        "agLife/aglife3.png",
        "agLife/aglife4.png",
        "agLife/aglife5.png",
        "agLife/aglife6.png",
        "agLife/aglife7.png",
        "agLife/aglife8.png",
        "agLife/aglife9.png",
        "agLife/aglife10.png",
        "agLife/aglife11.png",
        "agLife/aglife12.png",
        "agLife/aglife13.png",
        "agLife/aglife14.png",
        "agLife/aglife15.png",
        "agLife/aglife16.png",
        "agLife/aglife17.png",
        "agLife/aglife18.png",
        "agLife/aglife19.png",
        "agLife/aglife20.png",
        "agLife/aglife21.png",
        "agLife/aglife22.png",
        "agLife/aglife23.png",
        "agLife/aglife24.png",
        "agLife/aglife25.png",
        "agLife/aglife26.png",
        "agLife/aglife27.png",
        "agLife/aglife28.png",
        //"agLife/aglife29.png",
        "agLife/aglife30.png",
        "agLife/aglife31.png",
        "agLife/aglife32.png",
        "agLife/aglife33.png",
       // "agLife/aglife34.png",
       // "agLife/aglife35.png",
        "agLife/aglife36.jpg",
        "agLife/aglife37.jpg",
        "agLife/aglife38.jpg",
        "agLife/agLife39.jpg",
       // "agLife/agLife40.jpg",
        "agLife/agLife44.jpg",
        "agLife/agLife45.jpg",
        "agLife/agLife46.jpg",
        "agLife/agLife47.jpg",
        "agLife/agLife48.jpg",
        "agLife/agLife49.jpg",
        "agLife/agLife50.jpg",
        "agLife/agLife51.jpg",
        "agLife/agLife52.jpg",
        "agLife/agLife53.jpg",
        "agLife/agLife54.jpg",
        "agLife/agLife55.jpg",
        //"agLife/agLife56.jpg",
        "agLife/agLife57.jpg",
        "agLife/agLife58.jpg",
        "agLife/agLife59.jpg",
        "agLife/agLife60.jpg",
        "agLife/agLife61.jpg",
        "agLife/agLife62.jpg",
        "agLife/agLife63.jpg",
        "agLife/agLife64.jpg",
        "agLife/agLife65.jpg",
        //"agLife/agLife66.jpg",
        "agLife/agLife67.jpg",
       */ "agLife/agLife68.jpg",
        "agLife/agLife69.jpg",
        "agLife/agLife69.jpg",
        "agLife/agLife70.jpg",
       // "agLife/agLife71.jpg",
        "agLife/agLife72.jpg",
        "agLife/agLife73.jpg",
        "agLife/agLife74.jpg",
        "agLife/agLife75.jpg",
        //"agLife/agLife76.jpg",
        "agLife/agLife77.jpg",
        //"agLife/agLife78.jpg",
        "agLife/agLife79.jpg",
        "agLife/agLife80.jpg",
        "agLife/agLife81.jpg",
        "agLife/agLife82.jpg",
        "agLife/agLife83.jpg",
        "agLife/agLife84.jpg",
        "agLife/agLife85.jpg",
        //"agLife/agLife86.jpg",
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

      /*  "agriculture/agr1.png",
        "agriculture/agr2.png",
        "agriculture/agr3.png",
        "agriculture/agr4.png",
       // "agriculture/agr5.jpg",
        "agriculture/agr6.jpg",
        "agriculture/agr7.jpg",
        "agriculture/agr8.jpg",
        //"agriculture/agr9.jpg",
        //"agriculture/agr10.jpg",
        "agriculture/agr11.jpg",
        "agriculture/agr12.jpg",
        //"agriculture/agr13.jpg",
        "agriculture/agr14.jpg",
        "agriculture/agr15.jpg",
        //"agriculture/agr16.jpg",
        //"agriculture/agr17.jpg",
       // "agriculture/agr18.jpg",
       // "agriculture/agr19.jpg",
        "agriculture/agr20.jpg",
        "agriculture/agr21.jpg",
        "agriculture/agr22.jpg",
        //"agriculture/agr23.jpg",
       // "agriculture/agr24.jpg",
        //"agriculture/agr25.jpg",
        //"agriculture/agr27.jpg",
        "agriculture/agr28.jpg",
        "agriculture/agr29.jpg",
        "agriculture/agr30.jpg",
        "agriculture/agr31.jpg",
        "agriculture/agr32.jpg",
       // "agriculture/agr33.jpg",
        "agriculture/agr34.jpg",
        //"agriculture/agr35.jpg",
        "agriculture/agr36.jpg",
        "agriculture/agr37.jpg",
        "agriculture/agr38.jpg",
        "agriculture/agr39.jpg",
        //"agriculture/agr40.jpg",
       // "agriculture/agr41.jpg",
        "agriculture/agr42.jpg",
        "agriculture/agr43.jpg",
        "agriculture/agr44.jpg",
        "agriculture/agr45.jpg",
        //"agriculture/agr46.jpg",
        "agriculture/agr47.jpg",
        "agriculture/agr48.jpg",
        "agriculture/agr49.jpg",
        "agriculture/agr50.jpg",
        "agriculture/agr51.jpg",
       // "agriculture/agr52.jpg",
        "agriculture/agr53.jpg",
        "agriculture/agr54.jpg",
        "agriculture/agr55.jpg",
        "agriculture/agr56.jpg",
        "agriculture/agr57.jpg",
        "agriculture/agr58.jpg",
        //"agriculture/agr59.jpg",
        "agriculture/agr60.jpg",
        "agriculture/agr61.jpg",
        //"agriculture/agr62.jpg",
        "agriculture/agr63.jpg",
        "agriculture/agr64.jpg",
        "agriculture/agr65.jpg",
        "agriculture/agr66.jpg",
        "agriculture/agr67.jpg",
        //"agriculture/agr68.jpg",
        "agriculture/agr69.jpg",
       */ //"agriculture/agr70.jpg",
       // "agriculture/agr71.jpg",
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

       /* "farmlife/farmlife1.png",
        "farmlife/farmlife1.jpg",
        "farmlife/farmlife2.png",
        "farmlife/farmlife2.jpg",
        "farmlife/farmlife3.png",
        //"farmlife/farmlife3.jpg",
        "farmlife/farmlife4.png",
        "farmlife/farmlife4.jpg",
        "farmlife/farmlife5.png",
        "farmlife/farmlife5.jpg",
        "farmlife/farmlife6.png",
        "farmlife/farmlife6.jpg",
        "farmlife/farmlife7.png",
        "farmlife/farmlife7.jpg",
        "farmlife/farmlife8.png",
        //"farmlife/farmlife8.jpg",
        "farmlife/farmlife9.png",
        "farmlife/farmlife9.jpg",
        "farmlife/farmlife10.png",
       // "farmlife/farmlife10.jpg",
        "farmlife/farmlife11.png",
        "farmlife/farmlife11.jpg",
        "farmlife/farmlife12.png",
        "farmlife/farmlife12.jpg",
        "farmlife/farmlife13.jpg",
        //"farmlife/farmlife14.jpg",
        "farmlife/farmlife15.jpg",
        "farmlife/farmlife16.jpg",
        "farmlife/farmlife17.jpg",
        "farmlife/farmlife18.jpg",
        "farmlife/farmlife19.jpg",
        "farmlife/farmlife20.jpg",
        "farmlife/farmlife21.jpg",
        "farmlife/farmlife22.jpg",
        "farmlife/farmlife23.jpg",
        "farmlife/farmlife24.jpg",
        "farmlife/farmlife25.jpg",
        "farmlife/farmlife26.jpg",
        "farmlife/farmlife27.jpg",
        "farmlife/farmlife28.jpg",
        //"farmlife/farmlife29.jpg",
        "farmlife/farmlife30.jpg",
        "farmlife/farmlife31.jpg",
        "farmlife/farmlife32.jpg",
        //"farmlife/farmlife33.jpg",
        "farmlife/farmlife34.jpg",
        "farmlife/farmlife35.jpg",
        "farmlife/farmlife36.jpg",
        "farmlife/farmlife37.jpg",
        "farmlife/farmlife38.jpg",
        "farmlife/farmlife39.jpg",
        //"farmlife/farmlife40.jpg",
        "farmlife/farmlife41.jpg",
        "farmlife/farmlife42.jpg",
        "farmlife/farmlife43.jpg",
        "farmlife/farmlife44.jpg",
        //"farmlife/farmlife45.jpg",
        "farmlife/farmlife46.jpg",
       // "farmlife/farmlife47.jpg",
        "farmlife/farmlife48.jpg",
        "farmlife/farmlife49.jpg",
        "farmlife/farmlife50.jpg",
        "farmlife/farmlife51.jpg",
        "farmlife/farmlife52.jpg",
        //"farmlife/farmlife53.jpg",
        "farmlife/farmlife54.jpg",
       // "farmlife/farmlife55.jpg",
       */ //"farmlife/farmlife56.jpg",
        //"farmlife/farmlife57.jpg",
       // "farmlife/farmlife58.jpg",
        //"farmlife/farmlife59.jpg",
       /// "farmlife/farmlife60.jpg",
       // "farmlife/farmlife61.jpg",
       // "farmlife/farmlife62.jpg",
        //"farmlife/farmlife63.jpg",
       // "farmlife/farmlife64.jpg",
       // "farmlife/farmlife65.jpg",
       // "farmlife/farmlife66.jpg",
        //"farmlife/farmlife67.jpg",
       // "farmlife/farmlife68.jpg",
       // "farmlife/farmlife69.jpg",
       // "farmlife/farmlife70.jpg",
      //  "farmlife/farmlife71.jpg",
       // "farmlife/farmlife72.jpg",
        "farmlife/farmlife73.jpg",
        "farmlife/farmlife74.jpg",
        "farmlife/farmlife75.jpg",
        "farmlife/farmlife76.jpg",
        "farmlife/farmlife77.jpg",
       // "farmlife/farmlife78.jpg",
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
        //"misc/misc19.jpeg",
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
    