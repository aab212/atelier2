// Object containing image arrays for different galleries
const galleries = {
    'gallery-1': [
        "images/portfoliopage/yuna1.jpg",
        "images/portfoliopage/yuna2.jpg",
        "images/portfoliopage/yuna3.jpg",
        "images/portfoliopage/yuna5.jpg",
        "images/portfoliopage/yuna6.jpg"
    ],
    'gallery-2': [
        "images/portfoliopage/alora1.jpg",
        "images/portfoliopage/alora2.jpg",
        "images/portfoliopage/alora3.jpg",
        "images/portfoliopage/alora5.jpg",
        "images/portfoliopage/alora6.jpg",
        "images/portfoliopage/alora7.jpg"
    ],
    'gallery-3': [
        "images/portfoliopage/celest1.jpg",
        "images/portfoliopage/celest3.jpg",
        "images/portfoliopage/celest4.jpg",
        "images/portfoliopage/celest5.jpg",
        "images/portfoliopage/celest6.jpg",
        "images/portfoliopage/celest2.jpg"
    ],
    'gallery-4': [
        "images/portfoliopage/galiana2.jpg",
        "images/portfoliopage/galiana3.jpg",
        "images/portfoliopage/galiana4.jpg",
        "images/portfoliopage/galiana5.jpg",
        "images/portfoliopage/galiana6.jpg"
    ],
    'gallery-5': [
        "images/portfoliopage/amore1.jpg",
        "images/portfoliopage/amore2.jpg",
        "images/portfoliopage/amore4.jpg",
        "images/portfoliopage/amore5.jpg",
        "images/portfoliopage/amore6.jpg",
        "images/portfoliopage/amore7.jpg",
        "images/portfoliopage/amore8.jpg"

    ],
    'gallery-6': [
        "images/portfoliopage/verenarose2.jpg",
        "images/portfoliopage/verenarose3.jpg",
        "images/portfoliopage/verenarose4.jpg",
        "images/portfoliopage/verenarose5.jpg",
        "images/portfoliopage/verenarose6.jpg",
        "images/portfoliopage/verenarose7.jpg"

    ]
};

let currentImageIndex = 0;
let currentGallery = '';

// Open the gallery pop-up
function openGallery(index, galleryId) {
    currentImageIndex = index;
    currentGallery = galleryId;
    document.getElementById('gallery-image').src = galleries[currentGallery][currentImageIndex];
    document.getElementById('gallery-popup').style.display = 'flex';
}

// Close the gallery pop-up
function closeGallery() {
    document.getElementById('gallery-popup').style.display = 'none';
}

// Show the previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleries[currentGallery].length) % galleries[currentGallery].length;
    document.getElementById('gallery-image').src = galleries[currentGallery][currentImageIndex];
}

// Show the next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleries[currentGallery].length;
    document.getElementById('gallery-image').src = galleries[currentGallery][currentImageIndex];
}
