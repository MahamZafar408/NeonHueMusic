console.log("Welcome to NeonHueMusic");
let songIndex=0;
let audioElement=new Audio('music/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');
let about = document.getElementsByClassName("about")[0];

const currentSongCover = document.getElementById('currentSongCover');
const currentSongName = document.getElementById('currentSongName');
const currentSongDetails = document.getElementById('currentSongDetails');

let songs=[
    {songName: "Lover", filePath:"music/1.mp3", coverPath:"cover.jpg" },
    {songName: "Beautiful Ghosts", filePath:"music/2.mp3", coverPath:"covers/2.jpg" },
    {songName: "Bejeweled", filePath:"music/3.mp3", coverPath:"covers/3.jpg" },
    {songName: "Blank Space", filePath:"music/4.mp3", coverPath:"covers/4.jpg" },
    {songName: "Enchanted", filePath:"music/5.mp3", coverPath:"covers/5.jpg" },
    {songName: "I Can Do It With A Broken Heart", filePath:"music/6.mp3", coverPath:"covers/6.jpg" },
    {songName: "Karma", filePath:"music/7.mp3", coverPath:"covers/7.jpg" },
    {songName: "Lavender Haze", filePath:"music/8.mp3", coverPath:"covers/8.jpg" },
    {songName: "Shake It Off", filePath:"music/9.mp3", coverPath:"covers/9.jpg" },
    {songName: "You Belong With Me", filePath:"music/10.mp3", coverPath:"covers/10.jpg" },

];

const songDetails = [
    { 
        name: "Lover", 
        details: "A romantic song by Taylor Swift.", 
        artist: "Taylor Swift", 
        releaseDate: "2019", 
        genre: "Pop", 
        credits: "Written by Taylor Swift, Jack Antonoff" 
    },
    { 
        name: "Beautiful Ghosts", 
        details: "A hauntingly beautiful song from the movie.", 
        artist: "Taylor Swift", 
        releaseDate: "2019", 
        genre: "Soundtrack", 
        credits: "Written by Taylor Swift, Andrew Lloyd Webber" 
    },
    { 
        name: "Bejeweled", 
        details: "A catchy pop song.", 
        artist: "Taylor Swift", 
        releaseDate: "2022", 
        genre: "Pop", 
        credits: "Written by Taylor Swift, Jack Antonoff" 
    },
    { 
        name: "Blank Space", 
        details: "A satirical take on love and relationships.", 
        artist: "Taylor Swift", 
        releaseDate: "2014", 
        genre: "Pop", 
        credits: "Written by Taylor Swift, Max Martin, Shellback" 
    },
    { 
        name: "Enchanted", 
        details: "A magical love song.", 
        artist: "Taylor Swift", 
        releaseDate: "2010", 
        genre: "Country", 
        credits: "Written by Taylor Swift, Dan Wilson" 
    },
    { 
        name: "I Can Do It With A Broken Heart", 
        details: "A song about resilience.", 
        artist: "Miley Cyrus", 
        releaseDate: "2007", 
        genre: "Pop", 
        credits: "Written by Miley Cyrus, Antonina Armato, Tim James" 
    },
    { 
        name: "Karma", 
        details: "A song about consequences.", 
        artist: "Taylor Swift", 
        releaseDate: "2022", 
        genre: "Pop", 
        credits: "Written by Taylor Swift, Jack Antonoff" 
    },
    { 
        name: "Lavender Haze", 
        details: "A dreamy pop song.", 
        artist: "Taylor Swift", 
        releaseDate: "2022", 
        genre: "Pop", 
        credits: "Written by Taylor Swift, Jack Antonoff" 
    },
    { 
        name: "Shake It Off", 
        details: "An upbeat anthem about shaking off negativity.", 
        artist: "Taylor Swift", 
        releaseDate: "2014", 
        genre: "Pop", 
        credits: "Written by Taylor Swift, Max Martin, Shellback" 
    },
    { 
        name: "You Belong With Me", 
        details: "A classic teen love story.", 
        artist: "Taylor Swift", 
        releaseDate: "2008", 
        genre: "Country", 
        credits: "Written by Taylor Swift, Liz Rose" 
    },
];


const currentSongArtist = document.getElementById('currentSongArtist');
const currentSongReleaseDate = document.getElementById('currentSongReleaseDate');
const currentSongGenre = document.getElementById('currentSongGenre');
const currentSongCredits = document.getElementById('currentSongCredits');

currentSongCover.src = songs[songIndex].coverPath;
currentSongName.innerText = songs[songIndex].songName;
currentSongDetails.innerText = songDetails[songIndex].details;
currentSongArtist.innerText = "Artist: " + songDetails[songIndex].artist;
currentSongReleaseDate.innerText = "Release Date: " + songDetails[songIndex].releaseDate;
currentSongGenre.innerText = "Genre: " + songDetails[songIndex].genre;
currentSongCredits.innerText = "Credits: " + songDetails[songIndex].credits;


songItems.forEach((element, i) =>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


})
about.addEventListener("click", function () {
    window.location.href = "about.html";
});

const updatePlayIcons = (isPlaying) => {
    makeAllPlays();
    if (isPlaying) {
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        songItems[songIndex].getElementsByClassName('songItemPlay')[0].classList.remove('fa-play-circle');
        songItems[songIndex].getElementsByClassName('songItemPlay')[0].classList.add('fa-pause-circle');
    } else {
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        songItems[songIndex].getElementsByClassName('songItemPlay')[0].classList.remove('fa-pause-circle');
        songItems[songIndex].getElementsByClassName('songItemPlay')[0].classList.add('fa-play-circle');
    }
}

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        updatePlayIcons(true);
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        updatePlayIcons(false);
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        const clickedIndex = parseInt(e.target.id);

        if (audioElement.paused && songIndex === clickedIndex && audioElement.currentTime > 0) {
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
            return;
        }

        if (!audioElement.paused && songIndex === clickedIndex) {
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
            return;
        }

        if (audioElement.paused && audioElement.currentTime <= 0) {
            makeAllPlays();
            songIndex = clickedIndex;
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = songs[songIndex].filePath;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        else {
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
            makeAllPlays();
            songIndex = clickedIndex;
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = songs[songIndex].filePath;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        currentSongCover.src = songs[clickedIndex].coverPath;
        currentSongName.innerText = songs[clickedIndex].songName;
        currentSongDetails.innerText = songDetails[clickedIndex].details;
        currentSongArtist.innerText = "Artist: " + songDetails[clickedIndex].artist;
        currentSongReleaseDate.innerText = "Release Date: " + songDetails[clickedIndex].releaseDate;
        currentSongGenre.innerText = "Genre: " + songDetails[clickedIndex].genre;
        currentSongCredits.innerText = "Credits: " + songDetails[clickedIndex].credits;
})
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=songs[songIndex].filePath;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    updatePlayIcons(true);
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=songs[songIndex].filePath;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    updatePlayIcons(true);
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})
