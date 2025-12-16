// Existing functions
function goToPage1() { window.location.href = "index.html"; }

function goToPage2() { window.location.href = "page2.html"; }

function goToPage3() { window.location.href = "page3.html"; }

// New functions for Page 3 cards
function goToGallery() { window.location.href = "gallery.html"; }

function goToBouquet() { window.location.href = "bouquet.html"; }

function goToLetter() { window.location.href = "loveletter.html"; }

function goToSong() { window.location.href = "song.html"; }

function goToWish() { window.location.href = "wish.html"; }

function goToCandles() { window.location.href = "candles.html"; }

function goBack() { window.location.href = "index.html"; }

function goToGiftIntro() { window.location.href = "gift_intro.html"; }

function goToGift() { window.location.href = "gift.html"; }

function getHint() {
    Swal.fire({
        title: 'Hint!',
        text: 'Look around the place where you usually relax!',
        icon: 'info',
        confirmButtonText: 'Got it!'
    });
    // window.location.href = "envelope.html"; // Uncomment if you want to go to next page
}

function takePhoto() { window.location.href = "takePhoto.html"; }

// function takePhoto() { window.location.href = "https://photobooth.nashallery.com/index.html"; }

function goToRating() { window.location.href = "rating.html"; }