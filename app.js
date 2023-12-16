const apiKey = 'AIzaSyAufOc3oLd7zjP8CFBb2Wc2LRK9uXYYVpA';
const videoId = 'r7NxmQqDhL0';

let player;

// Load YouTube API script asynchronously
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    // Fetch video details using the YouTube Data API
    fetchVideoDetails(apiKey, videoId);
}

// Function to handle when the player is ready
function onPlayerReady(event) {
    event.target.playVideo();
}

// Function to handle when the player state changes
function onPlayerStateChange(event) {
    
}

// Function to fetch video details using the YouTube Data API
function fetchVideoDetails(apiKey, videoId) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the data, you can log it to the console for now
            console.log('Video Details:', data);
        })
        .catch(error => {
            console.error('Error fetching video details:', error);
        });
}

// Load YouTube API script
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
