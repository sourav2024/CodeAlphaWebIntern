const menuBtn = document.querySelector(".menu-btn"),
      container = document.querySelector(".container");

const progressBar = document.querySelector(".bar");
const progressDot = document.querySelector(".dot");
const currentTimeEl = document.querySelector(".current-time");
const DurationEl = document.querySelector(".duration");


menuBtn.addEventListener("click" , () =>{
    container.classList.toggle("active");
});

let playing = false,
    currentSong = 0,
    shuffle = false,
    repeat = false,
    favourits = [],
    audio = new Audio();

const songs = [
    {
   title : "Friends",
    artist : "Marshmello & Anne-Marie",
        img_src : "1.jpg",
        src: "1.mp3",
     },
    
     {
   title : "Closer",
    artist : "ChainSmokers",
        img_src : "closer.jpg",
        src: "Closer---The-Chainsmokers-Ft.-Halsey(PaglaSongs.Com.Se).mp3",
     },
    {
     title : "At My Worst",
    artist : "Pink Planet",
        img_src : "size_l.jpg",
        src: "At-My-Worst.mp3",
     },
    {
     title : "Let Me Love You",
    artist : "DJ Snake",
        img_src : "58972339750044289d01e654fc5fbb86_464_464.jpg",
        src: "Let-Me-Love-You_320(PaglaSongs).mp3",
     },
    {
     title : "Taki Taki",
    artist : "Dj Snake",
        img_src : "artworks-000418146432-qrwuit-t500x500.jpg",
        src: "Taki-Taki---DJ-Snake(musicdownload.cc).mp3",
     },
];

const playlistContainer = document.querySelector("#playlist"),

infoWrapper = document.querySelector(".info"),

coverImage = document.querySelector(".cover-image"),
      
currentSongTitle = document.querySelector(".current-song-title"),

currentFavourite = document.querySelector("#current-favourite");

function init(){
    updatePlaylist(songs);
    loadSong(0);
}
init();


const playPauseBtn = document.querySelector("#playpause"),
      nextBtn = document.querySelector("#next"),
      prevBtn = 
      
    document.querySelector("#prev");
function updatePlaylist(songs){
    
    playlistContainer.innerHTML = "";
    
    
    songs.forEach((song, index) =>{
        
        const {title, src} = song;
        
        const isFavourite = favourits.includes(index);
        
         const tr = document.createElement("tr");
    tr.classList.add("song");
    tr.innerHTML = `        <td class="no">
                        <h4>${index +1}</h4>
                    </td>
                    <td class="title">
                        <h4>${title}</h4>
                    </td>
                    <td class="length">
                        <h4>2.:03</h4>
                    </td>
                    <td>
                        
                        <i class="fa fa-heart ${isFavourite ? "active" : ""} "></i>
                    </td>
       `;
        
        playlistContainer.appendChild(tr);
        
        tr.addEventListener("click", (e) =>{
             
            if(e.target.classList.contains("fa-heart")){
            addToFavourits(index);
                e.target.classList.toggle("active");
                return;
            }
            
            currentSong = index;
            loadSong(currentSong);
            audio.play();
            container.classList.remove("active");
            playPauseBtn.classList.replace("fa-play", "fa-pause");
            playing = true;
        });
        
        const audioForDuration = new Audio(`data/${src}`);
        audioForDuration.addEventListener("loadedmetadata", () =>{
            
            const duration = audioForDuration.duration;
            
            let songDuration = formatTime(duration);
            tr.querySelector(".length h4").innerText = songDuration;
        });
        
    });
   
}

function formatTime(time){
    
    let minutes = Math.floor(time/60);
    let seconds = Math.floor(time%60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}: ${seconds}`;
}

function loadSong(num){
    if(num>=0 && num<songs.length){
    infoWrapper.innerHTML = 
        `<h2>${songs[num].title}</h2>
    <h3> ${songs[num].artist}</h3>
    `;
    
     currentSongTitle.innerHTML = songs[num].title;
    
    coverImage.style.backgroundImage = `url(data/${songs[num].img_src})`;
    
    
    audio.src = `data/${songs[num].src}`;
    
    if(favourits.includes(num)){
        currentFavourite.classList.add("active");
        }
    else{
        currentFavourite.classList.remove("active");
    }}
    else{
        console.error(`invalid song index: ${num}`);
    }
}


playPauseBtn.addEventListener("click",()=>{
    if(playing){
        playPauseBtn.classList.replace("fa-pause", "fa-play");
        playing = false;
        audio.pause();
    }
    else{
        playPauseBtn.classList.replace("fa-play", "fa-pause");
        playing = true;
        audio.play();
    }
});

function nextSong(){
    
    if(shuffle){
        shuffleFunc();
            loadSong(currentSong);
          
        
    }
    
    else if(currentSong < songs.length-1){
        currentSong++;
        
    }
    else{
        currentSong = 0;
    }
    loadSong(currentSong);
    
    if(playing){
        audio.play();
    }
}

nextBtn.addEventListener("click", nextSong);

function prevSong(){
    
     
    if(shuffle){
        shuffleFunc();
            loadSong(currentSong);
            
        
    }
    
    else if(currentSong>0){
        currentSong--;
    }
    else{
        currentSong = songs.length-1;
    }
    loadSong(currentSong);
    
    if(playing){
        audio.play();
    }
    
}

prevBtn.addEventListener("click", prevSong);

function addToFavourits(index){
    if(favourits.includes(index)){
    favourits = favourits.filter((item) => item != index);
        
    currentFavourite.classList.remove("active");    
}
else{
    favourits.push(index);
    if(index=== currentSong){
        currentFavourite.classList.add("active");
    }
}
     updatePlaylist(songs);
    
}

currentFavourite.addEventListener("click", ()=>{
            addToFavourits(currentSong);
currentFavourite.classList.toggle("active");
                                  });

                                  
const shuffleBtn = document.querySelector("#shuffle");

function shuffleSongs(){
    shuffle !=shuffle;
    shuffle.classList.toggle("active");
}

shuffleBtn.addEventListener("click", shuffleSongs);

function shuffleFunc(){
    if(shuffle){
        currentSong = Math.floor(Math.random() * songs.length);
    }
}

const repeatBtn = document.querySelector("#repeat");

function repeatSong(){
    if(repeat ==0){
        repeat = 1;
        repeatBtn.classList.add("active");
    }
    else if(repeat == 1){
      repeat = 2;
        repeatBtn.classList.add("active");
    }
    else{
        repeat = 0;
        repeatBtn.classList.remove("active");
    }
}

repeatBtn.addEventListener("click", repeatSong);

audio.addEventListener("ended", () =>{
      if(repeat ==1){
          loadSong(currentSong);
          audio.play();
      } 
    else if(repeat==2){
        nextSong();
        audio.play();
    } else{
        if(currentSong === song.length -1){
            audio.pause();
            playPauseBtn.classList.replace("fa-pause", "fa-play");
            playing = false;
        }
        else{
            nextSong();
            audio.play();
        }
    }
});

function progress(){
    
    let {duration, currentTime} = audio;
    
    isNaN(duration) ? (duration = 0) : duration;
    
    isNaN(currentTime) ? (currentTime = 0) : currentTime;
    
    currentTimeEl.innerHTML = formatTime(currentTime);
    
    DurationEl.innerHTML = formatTime(duration);
    
    let progressPercentage = (currentTime/duration) * 100;
    progressDot.style.left = `${progressPercentage}%`;
}

audio.addEventListener("timeupdate",progress);

function setProgress(e){
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}



if (progressBar) {
    progressBar.addEventListener("click", setProgress);
} else {
    console.error("Progress bar element not found");
}
