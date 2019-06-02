var jukebox = document.querySelector('ul.player');
jukebox.addEventListener('click', function(e) {
  var songName = e.target.getAttribute('data-src');
  var audioPlayer = document.querySelector('#player');

  if (audioPlayer) {
//control the pause behaviour
    if (songName===audioPlayer.getAttribute('src')) {
      if (audioPlayer.paused) {
        audioPlayer.play();
        e.target.id = 'playing';
      } else {
        audioPlayer.pause();
        e.target.id = 'paused';
      }
    } else {
    //control the play behaviour
      audioPlayer.src = songName;
      audioPlayer.play();
      if (document.querySelector('#playing')) {
        document.querySelector('#playing').id='';
      } else {
        document.querySelector('#paused').id='';
      }
        e.target.id = 'playing';
    }



  } else {
  //dynamically adding audio element
    var audioPlayer = document.createElement('audio');
    audioPlayer.id = 'player';
    e.target.id = 'playing';
    audioPlayer.src = songName;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();

//when song completed then remove the element
    audioPlayer.addEventListener('ended', function() {
      audioPlayer.parentNode.removeChild(audioPlayer);
      e.target.id='';
    }, false);
  }

}, false);
