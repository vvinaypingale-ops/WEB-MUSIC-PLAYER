console.log("Welcome to VV MUSIC");

let songIndex = 0;
let audioElement = new Audio('bum bum.mp3'); // default first song
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

let songs = [
    {songName: "Song 1", filePath: "bum bum.mp3", coverPath: "covers/1.jpg"}, 
    {songName: "Song 2", filePath: "shaabashiyan.mp3", coverPath: "covers/2.jpg"}, 
    {songName: "Song 3", filePath: "bekhayali.mp3", coverPath: "covers/3.jpg"}, 
    {songName: "Song 4", filePath: "lakshaya.mp3", coverPath: "covers/4.jpg"}, 
    {songName: "Song 5", filePath: "", coverPath: "covers/5.jpg"}
];

// Play / Pause
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek song
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Next Song
nextBtn.addEventListener('click', () => {
    console.log("Next button clicked ✅");
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.load();  // important for switching source
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});


// Previous Song
prevBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // loop to last if < 0
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});
