console.log("Welcome To Song List");
let songIndex = 0;
let audioElement = new Audio('1.mp3'); 
let masterplay = document.getElementById("masterplay");
let Prograessbar = document.getElementById("Prograessbar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: " Chonchol Mon Amar ", filePath: "songs/Chonchol Mon Amar Shonena Kotha  Faiyas  Nihal  (Improvised)   Paban Das Baul.mp3", coverPath: "cover/images.png"},
    {songName: " Ghorgari ঘরগড ", filePath: "song/Ghorgari ঘরগড - Highway (lyrics) New  Osam lyrics (Fox lyrics 1M).mp3", coverPath: "cover/images.png"},
    {songName: " Ho Meri Zindagi Se ", filePath: "songs/Ho Meri Zindagi Se Jaane Ka Kya Loge Tum Full Song  Akshay Kumar  B Praak  Kya Loge tum Full Song.mp3", coverPath: "cover/images.png"},
    {songName: " Hustle Contestant Special", filePath: "songs/Hustle Contestant Special  R.C.R.  RCR's Smashing Lyrics!.mp3", coverPath: "cover/images.png"},
    {songName: " James  New Song  _Shobi Bhul_  ", filePath: "songs/James  New Song  _Shobi Bhul_  Presented by Bashundhara LPG.mp3", coverPath: "cover/images.png"},
    {songName: " Kailash Kher - Teri Deewani", filePath: "songs/Kailash Kher - Teri Deewani.mp3", coverPath: "cover/images.png"},
    {songName: " Minar Rahman - Keu ", filePath: "songs/Minar Rahman - Keu Kotha Rakheni (Official Music Video 2020).mp3", coverPath: "cover/images.png"},
    {songName: " Ovinoy  Noble Man", filePath: "songs/Ovinoy  Noble Man  Bangla Rock Song  অভনয়  নবল মযন  বল রক গন  Official Music Video.mp3", coverPath: "cover/images.png"},
    {songName: " Ram Ram  MC SQUARE", filePath: "songs/Ram Ram  MC SQUARE  Hustle 2.0.mp3", coverPath: "cover/images.png"},
    {songName: " Rong Kora Putul ", filePath: "songs/Rong Kora Putul By James  O Se Rong Kora Putul  রঙ কর পতল গর জমস.mp3", coverPath: "cover/images.png"},
    {songName: " Tumi Arekbar Ashia", filePath: "songs/Tumi Arekbar Ashia  IPDC আমদর গন  Animes Roy.mp3", coverPath: "cover/images.png"},
    {songName: " খচর পখ উড়ল দল ", filePath: "songs/খচর পখ উড়ল দল বসব কর ভল_  Khachar Pakhi Ural Dile  Dipra Barua.mp3", coverPath: "cover/images.png"},
]

songItem.forEach((element , i)=>{
    console.log(element , i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;   
})
//audio play
masterplay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play'); 
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1; 
        //test opacity
        
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
    
})
//lisen to Event

audioElement.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');
    //update seekbar
    Prograes = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(Prograes);
    Prograessbar.value = Prograes;
    // check Progressbar
    

 })
 // duration change Progressbar

 Prograessbar.addEventListener('change' , ()=>{
    audioElement.currentTime = Prograessbar.value * audioElement.duration/100;
    
 })
 const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playCircle')).forEach((element)=>{
            element.target.classList.remove('fa-pause');
            element.target.classList.add('fa-play');
        })
 }

 Array.from(document.getElementsByClassName('playCircle')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-pause');
        e.target.classList.add('fa-play');
        audioElement.src = `songs/${songIndex+1}.mp3` ;
        audioElement.currentTime = 0;
     

    })
 })
