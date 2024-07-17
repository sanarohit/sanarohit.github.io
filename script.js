console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs= [
    {songName: "sthuthi Mahima", filePath: "songs/1.mp3", coverPath: "covers/1.png"},
    {songName: "Yesu Raja", filePath: "songs/2.mp3", coverPath: "covers/1.png"},
    {songName: "Enno Mellulu", filePath: "songs/3.mp3", coverPath: "covers/1.png"},
    {songName: "Deva Koniyadi", filePath: "songs/4.mp3", coverPath: "covers/1.png"},
    {songName: "Neeve Yesaiah", filePath: "songs/5.mp3", coverPath: "covers/1.png"},
    {songName: "Dvya Sothu", filePath: "songs/6.mp3", coverPath: "covers/1.png"},
    {songName: "Dharma Shastramu", filePath: "songs/7.mp3", coverPath: "covers/1.png"},
    {songName: "Devudu okkadu unnadani", filePath: "songs/8.mp3", coverPath: "covers/1.png"},
    {songName: "manchi Devuda", filePath: "songs/9.mp3", coverPath: "covers/1.png"},
    {songName: "Prabhua Sahayam", filePath: "songs/10.mp3", coverPath: "covers/1.png"},
    {songName: "Nilakadaga", filePath: "songs/11.mp3", coverPath: "covers/1.png"},
    {songName: "Prabhua Deva", filePath: "songs/12.mp3", coverPath: "covers/1.png"},
    {songName: "Paramandali Deva", filePath: "songs/13.mp3", coverPath: "covers/1.png"},
    {songName: "Santhi Santhi", filePath: "songs/14.mp3", coverPath: "covers/1.png"},
    {songName: "Nadichedan", filePath: "songs/15.mp3", coverPath: "covers/1.png"},
    {songName: "Santoshame", filePath: "songs/16.mp3", coverPath: "covers/1.png"},
    {songName: "Dyvam Prema Swaroopam", filePath: "songs/17.mp3", coverPath: "covers/1.png"},
    {songName: "Naa Jeevitha Vyadalandhu", filePath: "songs/18.mp3", coverPath: "covers/1.png"},
    {songName: "Meluko Viswasi Meluko ", filePath: "songs/19.mp3", coverPath: "covers/1.png"},
    {songName: "Saagi podama", filePath: "songs/20.mp3", coverPath: "covers/1.png"},


    {songName: "Light of the world ", filePath: "songs/21.mp3", coverPath: "covers/2.png"},
    {songName: "I am Trading", filePath: "songs/22.mp3", coverPath: "covers/2.png"},
    {songName: "Above All", filePath: "songs/23.mp3", coverPath: "covers/2.png"},
    {songName: "Elshaddai", filePath: "songs/24.mp3", coverPath: "covers/2.png"},
    {songName: "I will sing ", filePath: "songs/25.mp3", coverPath: "covers/2.png"},
    {songName: "These are the days", filePath: "songs/26.mp3", coverPath: "covers/2.png"},
    {songName: "What Can I Give ", filePath: "songs/27.mp3", coverPath: "covers/2.png"},
    {songName: "I will Celebrate", filePath: "songs/28.mp3", coverPath: "covers/2.png"},
    {songName: "Lift Your Heads", filePath: "songs/29.mp3", coverPath: "covers/2.png"},
    {songName: "You are the Rock ", filePath: "songs/30.mp3", coverPath: "covers/2.png"},
    {songName: "Sing Hallelujah to the Lord ", filePath: "songs/31.mp3", coverPath: "covers/2.png"},
    {songName: "What a friend we have in jesus", filePath: "songs/32.mp3", coverPath: "covers/2.png"},
    {songName: "O Come all ye faithfull", filePath: "songs/33.mp3", coverPath: "covers/2.png"},
    {songName: "Hosanna", filePath: "songs/34.mp3", coverPath: "covers/2.png"},
    {songName: "All To Jesus I Surrender ", filePath: "songs/35.mp3", coverPath: "covers/2.png"},
    {songName: "100000_reasons_Blessings", filePath: "songs/36.mp3", coverPath: "covers/2.png"},
    {songName: "Praise Adonai", filePath: "songs/37.mp3", coverPath: "covers/2.png"},
    {songName: "Hail Jesus", filePath: "songs/38.mp3", coverPath: "covers/2.png"},
    {songName: "God will Make A Way", filePath: "songs/39.mp3", coverPath: "covers/2.png"},
    {songName: "Lord come to U", filePath: "songs/40.mp3", coverPath: "covers/2.png"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})