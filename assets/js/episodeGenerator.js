// Function to fetch JSON data
async function fetchEpisodesData() {
    try {
        const response = await fetch('assets/js/episodes.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        return null;
    }
}

// Updated function to generate random episode
async function generateNumber() {
    const episodesData = await fetchEpisodesData();

    if (!episodesData) {
        console.error('Error loading episode data.');
        return;
    }

    const episodeNumbers = Object.keys(episodesData);
    const randomEpisodeNumber = episodeNumbers[Math.floor(Math.random() * episodeNumbers.length)];
    const episodeInfo = episodesData[randomEpisodeNumber];

    if (episodeInfo) {
        const title = episodeInfo.title;
        const releaseYear = episodeInfo.year;
        const link = episodeInfo.link;
        const imagePath = episodeInfo.image_path;

        const episodeContent = document.getElementById('episodeContent');
        episodeContent.textContent = `Episode ${randomEpisodeNumber}: ${title} (${releaseYear})`;

        // Optionally, you can use the imagePath to display an image
        const episodeImage = document.getElementById('episodeImage');
        episodeImage.src = imagePath;

        // Update the Spotify link array
        const spotifyLinks = [link];

        // ... rest of your code
    } else {
        const episodeContent = document.getElementById('episodeContent');
        episodeContent.textContent = 'Episode information not found. Please try again.';
    }
}

// Call the function when the page loads
window.onload = function () {
    generateNumber();
};
