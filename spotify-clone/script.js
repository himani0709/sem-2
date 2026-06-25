const songs = [
    { id: 0, title: "Synthwave Dreams", artist: "Kavinsky Style", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 1, title: "Lo-Fi Study Beats", artist: "Chillhop Collective", cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { id: 2, title: "Cyberpunk Edge", artist: "Neo Tokyo", cover: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { id: 3, title: "Ambient Echoes", artist: "Solaris", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
];

let currentSongIndex = 0;
let isPlaying = false;
const audioPlayer = new Audio(songs[currentSongIndex].url);

const trackGrid = document.getElementById('trackGrid');
const btnPlay = document.getElementById('btnPlay');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const timelineSlider = document.getElementById('timelineSlider');
const uiTitle = document.getElementById('uiTitle');
const uiArtist = document.getElementById('uiArtist');
const uiCover = document.getElementById('uiCover');

function loadSongsUI() {
    trackGrid.innerHTML = songs.map((song, index) => `
        <div class="song-card" onclick="playSelectedSong(${index})">
            <img src="${song.cover}" alt="cover">
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
        </div>
    `).join('');
}

function loadTrack(index) {
    currentSongIndex = index;
    audioPlayer.src = songs[currentSongIndex].url;
    uiTitle.innerText = songs[currentSongIndex].title;
    uiArtist.innerText = songs[currentSongIndex].artist;
    uiCover.src = songs[currentSongIndex].cover;
}

function playSelectedSong(index) {
    loadTrack(index);
    playTrack();
}

function playTrack() {
    isPlaying = true;
    audioPlayer.play();
    btnPlay.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>';
}

function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        btnPlay.innerHTML = '<i class="fas fa-play-circle fa-2x"></i>';
    } else {
        audioPlayer.play();
        btnPlay.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>';
    }
    isPlaying = !isPlaying;
}

btnPlay.addEventListener('click', togglePlay);
btnNext.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSelectedSong(currentSongIndex);
});
btnPrev.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSelectedSong(currentSongIndex);
});

audioPlayer.addEventListener('timeupdate', () => {
    const progress = parseInt((audioPlayer.currentTime / audioPlayer.duration) * 100);
    timelineSlider.value = isNaN(progress) ? 0 : progress;
});

timelineSlider.addEventListener('change', () => {
    audioPlayer.currentTime = (timelineSlider.value * audioPlayer.duration) / 100;
});

// Init
loadSongsUI();
loadTrack(currentSongIndex);