document.addEventListener('DOMContentLoaded', function() {
    
    let music = document.querySelector('.music-player');
    let progress = document.querySelector('.progress');
    let playpausebtn = document.querySelector('.play-pause-btn');

   
    music.addEventListener('loadedmetadata', function() {
        
        progress.addEventListener('input', function() {
            
            const value = this.value;
            music.currentTime = music.duration * value / 100;
        });
    });

    playpausebtn.addEventListener('click',function(){
        if(music.paused){
            music.play;
            playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }else{
            music.pause();
            playpausebtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    })
});