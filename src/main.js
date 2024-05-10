
    
    let music = document.querySelector('.music-player');
    let progress = document.querySelector('.progress');
    let playpausebtn = document.querySelector('.play-pause-btn');
    let playpauseIcon = playpausebtn.querySelector('i');

    
        
        progress.addEventListener('input', function() {
            
            const value = this.value;
            music.currentTime = music.duration * value / 100;
        });
    

    music.addEventListener('timeupdate', function(){
        progress.value = (music.currentTime / music.duration) * 100 ;
    })

    playpausebtn.addEventListener('click', function(){
       
        
        if(playpauseIcon.classList.contains("fa-play")){
            music.play();
            console.log("play")
            playpauseIcon.classList.remove("fa-play");
            playpauseIcon.classList.add("fa-pause");
            document.querySelector('.song-img').style.animationName = "song-spin";
        } else {
            music.pause();
            console.log("pause");
            playpauseIcon.classList.remove("fa-pause");
            playpauseIcon.classList.add("fa-play");
            document.querySelector('.song-img').style.animationName = "none"
            document.querySelector('.song-img').style.transform = "rotate()"
        }
    });

    const nextBtn = document.querySelector('.next-btn');
    const previousBtn = document.querySelector('.previous-btn');
    let songtracker = 0;
    let songs = [
        {name:"Blue Da Da",
        song:"audios/spotifydown.com - Blue (Da Ba Dee).mp3",
        img:"images/blue.png"
        },
        {name:"Not Like Us",
        song:"audios/notlikeus.mp3",
        img:"images/notlikeus.png"
        },
        {name:"Push Ups",
        song:"audios/pushups.mp3",
        img:"images/pushups.png"
        }]
    
    nextBtn.addEventListener('click',() => {
    
    console.log(songtracker);
    if(songtracker < songs.length-1 ){
        songtracker++;
        music.innerHTML = `<source src="${songs[songtracker].song}" type="audio/mpeg">`
       document.querySelector('.song-img').src = `${songs[songtracker].img}`
        music.load();
        music.play();
        console.log("play")
            playpauseIcon.classList.remove("fa-play");
            playpauseIcon.classList.add("fa-pause");
            document.querySelector('.song-img').style.animationName = "song-spin";
            
            document.querySelector('.music-name').textContent = songs[songtracker].name;
    } else {
        
        songtracker = 0;
        music.innerHTML = `<source src="${songs[songtracker].song}" type="audio/mpeg">`;
        document.querySelector('.song-img').src = `${songs[songtracker].img}`
        music.load();
        music.play();
        document.querySelector('.music-name').textContent = songs[songtracker].name;
    }
    
    })

    previousBtn.addEventListener('click',() => {
    
    console.log(songtracker);
    if(songtracker >= 0 ){
        songtracker--;
        music.innerHTML = `<source src="${songs[songtracker].song}" type="audio/mpeg">`
       document.querySelector('.song-img').src = `${songs[songtracker].img}`
        music.load();
        music.play();
        console.log("play")
            playpauseIcon.classList.remove("fa-play");
            playpauseIcon.classList.add("fa-pause");
            document.querySelector('.song-img').style.animationName = "song-spin";

            document.querySelector('.music-name').textContent = songs[songtracker].name;
        } else {
        
        songtracker = 0;
        music.innerHTML = `<source src="${songs[songtracker].song}" type="audio/mpeg">`;
        document.querySelector('.song-img').src = `${songs[songtracker].img}`
        music.load();
        music.play();
        document.querySelector('.music-name').textContent = songs[songtracker].name;
    }
    
    })
   


