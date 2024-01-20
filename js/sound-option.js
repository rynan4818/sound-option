//howler.js
//https://howlerjs.com/
//<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.js"></script>

let sound_combo = {};
sound_combo[50] = './sound/combo_0050.wav';
sound_combo[100] = './sound/combo_0100.wav';
sound_combo[200] = './sound/combo_0200.wav';
sound_combo[300] = './sound/combo_0300.wav';
sound_combo[400] = './sound/combo_0400.wav';
sound_combo[500] = './sound/combo_0500.wav';
sound_combo[600] = './sound/combo_0600.wav';
sound_combo[700] = './sound/combo_0700.wav';
sound_combo[800] = './sound/combo_0800.wav';
sound_combo[900] = './sound/combo_0900.wav';
sound_combo[1000] = './sound/combo_1000.wav';
sound_combo[2000] = './sound/combo_2000.wav';
const sound_full_combo  = './sound/fullcombo.wav';
const sound_finished    = '';
const sound_failed      = '';
const sound_noteMissed  = '';// './sound/poka.wav';
const sound_bombCut     = './sound/balloon.wav';
const sound_softFailed  = '';
const sound_pause       = './sound/dong.wav';
const sound_resume      = './sound/ka.wav';
const sound_obstacle    = './sound/laser6.wav';
const sound_menu        = '';
const sound_songStart   = '';
const sound_noteCut     = '';

let sound_menu_flag = true;
let sound_combo_audio = {};
let sound_combo_list = [];
let sound_full_combo_flag = true;
let before_combo = 0;
for (let combo in sound_combo) {
  if (sound_combo[combo].trim() !== '') {
    sound_combo_audio[combo] = new Howl({src: [sound_combo[combo].trim()]});
    sound_combo_list.push(Number(combo));
  }
}
sound_combo_list.sort((a, b) => a - b);
let sound_combo_remaining = [];

let sound_full_combo_audio;
if (sound_full_combo.trim() !== '') {
  sound_full_combo_audio = new Howl({src: [sound_full_combo.trim()]});
}

let sound_finished_audio;
if (sound_finished.trim() !== '') {
  sound_finished_audio = new Howl({src: [sound_finished.trim()]});
}

let sound_failed_audio;
if (sound_failed.trim() !== '') {
  sound_failed_audio = new Howl({src: [sound_failed.trim()]});
}

let sound_noteMissed_audio;
if (sound_noteMissed.trim() !== '') {
  sound_noteMissed_audio = new Howl({src: [sound_noteMissed.trim()]});
}

let sound_bombCut_audio;
if (sound_bombCut.trim() !== '') {
  sound_bombCut_audio = new Howl({src: [sound_bombCut.trim()]});
}

let sound_softFailed_audio;
if (sound_softFailed.trim() !== '') {
  sound_softFailed_audio = new Howl({src: [sound_softFailed.trim()]});
}

let sound_menu_audio;
if (sound_menu.trim() !== '') {
  sound_menu_audio = new Howl({src: [sound_menu.trim()]});
}

let sound_songStart_audio;
if (sound_songStart.trim() !== '') {
  sound_songStart_audio = new Howl({src: [sound_songStart.trim()]});
}

let sound_pause_audio;
if (sound_pause.trim() !== '') {
  sound_pause_audio = new Howl({src: [sound_pause.trim()]});
}

let sound_resume_audio;
if (sound_resume.trim() !== '') {
  sound_resume_audio = new Howl({src: [sound_resume.trim()]});
}

let sound_obstacle_audio;
if (sound_obstacle.trim() !== '') {
  sound_obstacle_audio = new Howl({src: [sound_obstacle.trim()]});
}

let sound_noteCut_audio;
if (sound_noteCut.trim() !== '') {
  sound_noteCut_audio = new Howl({src: [sound_noteCut.trim()]});
}

ex_hello.push((data) => {
  if (data.status.beatmap && data.status.performance) {
	  before_combo = 0;
    sound_combo_remaining = sound_combo_list.concat();
    sound_combo_remaining.forEach((combo, index) => {
      if (data.status.performance.combo >= combo) {
        sound_combo_remaining.shift();
      }
    });
    sound_full_combo_flag = true;
    sound_menu_flag = false;
  } else {
    sound_menu_flag = true;
  }
});

ex_menu.push((data) => {
  if (!sound_menu_flag) {
    if (sound_menu.trim() !== '') {
      sound_menu_audio.play();
    }
  }
  sound_menu_flag = true;
});

ex_songStart.push((data) => {
  if (sound_menu_flag) {
    sound_combo_remaining = sound_combo_list.concat();
    if (sound_songStart.trim() !== '') {
      sound_songStart_audio.play();
    }
  }
	before_combo = 0;
  sound_full_combo_flag = true;
  sound_menu_flag = false;
});

ex_finished.push((data) => {
  if (sound_full_combo_flag && data.status.performance.passedNotes === data.status.performance.combo) {
    if (sound_full_combo.trim() !== '') {
      sound_full_combo_audio.play();
    }
  } else {
    if (sound_finished.trim() !== '') {
      sound_finished_audio.play();
    }
  }
});

ex_failed.push((data) => {
  if (sound_failed.trim() !== '') {
    sound_failed_audio.play();
  }
});

ex_pause.push((data) => {
  if (sound_pause.trim() !== '') {
    sound_pause_audio.play();
  }
});

ex_resume.push((data) => {
  if (sound_resume.trim() !== '') {
    sound_resume_audio.play();
  }
});

ex_obstacleEnter.push((data) => {
  if (sound_obstacle.trim() !== '') {
    sound_obstacle_audio.play();
  }
  sound_full_combo_flag = false;
});

ex_noteMissed.push((data) => {
  if (sound_noteMissed.trim() !== '') {
    sound_noteMissed_audio.play();
  }
  sound_full_combo_flag = false;
});

ex_bombCut.push((data) => {
  if (sound_bombCut.trim() !== '') {
    sound_bombCut_audio.play();
  }
  sound_full_combo_flag = false;
});

ex_softFailed.push((data) => {
  if (sound_softFailed.trim() !== '') {
    sound_softFailed_audio.play();
  }
});

ex_performance.push((data) => {
	if (before_combo > data.status.performance.combo) {
		sound_combo_remaining = sound_combo_list.concat();
	}
	before_combo = data.status.performance.combo;
  if (data.status.performance.combo >= sound_combo_remaining[0]) {
    sound_combo_audio[sound_combo_remaining[0]].play();
    sound_combo_remaining.shift();
  }
});

ex_noteCut.push((data) => {
  if (sound_noteCut.trim() !== '') {
    sound_noteCut_audio.play();
  }
});
