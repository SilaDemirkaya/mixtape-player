const songs = [
    { title: "Late Night Lo-Fi", src: "assets/audio/song1.mp3" },
    { title: "Moonlight Melody", src: "assets/audio/song2.mp3" }
  ];
  
  let currentSongIndex = 0;
  const audioPlayer = document.getElementById("audio-player");
  const nowPlaying = document.getElementById("now-playing");
  
  function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    nowPlaying.textContent = "Now playing: " + song.title;
    audioPlayer.play();
  }
  
  function playPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }
  
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
  }
  
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
  }
  
  window.onload = () => loadSong(currentSongIndex);
  