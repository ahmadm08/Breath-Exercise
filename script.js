window.onload = function () {

  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var buttonMulai = document.getElementById('button-mulai');
  var Interval;

  var audio = document.getElementById('chatAudio');

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  buttonMulai.onclick = async function () {

    document.getElementById('button-mulai').style.visibility = 'hidden';

    start();
    document.getElementById('judul').innerHTML = 'breath 90s';
    audio.play()
    await sleep(90 * 1000);

    reset();
    start();

    document.getElementById('judul').innerHTML = 'hold 60s';
    audio.play()
    await sleep(700);
    audio.play()
    await sleep(60 * 1000);

    reset();
    start();


    document.getElementById('judul').innerHTML = 'breath 75s';
    audio.play()
    await sleep(75 * 1000);

    reset();
    start();

    document.getElementById('judul').innerHTML = 'hold 60s';
    audio.play()
    await sleep(700);
    audio.play()
    await sleep(60 * 1000);

    reset();
    start();


    document.getElementById('judul').innerHTML = 'breath 60s';
    audio.play()
    await sleep(60 * 1000);

    reset();
    start();

    document.getElementById('judul').innerHTML = 'hold 60s';
    audio.play()
    await sleep(700);
    audio.play()
    await sleep(60 * 1000);

    reset();
    start();


    document.getElementById('judul').innerHTML = 'breath 45s';
    audio.play()
    await sleep(45 * 1000);

    reset();
    start();

    document.getElementById('judul').innerHTML = 'hold 60s';
    audio.play()
    await sleep(700);
    audio.play()
    await sleep(60 * 1000);

    reset();
    start();


    document.getElementById('judul').innerHTML = 'breath 30s';
    audio.play()
    await sleep(30 * 1000);

    reset();
    start();

    document.getElementById('judul').innerHTML = 'hold 60s';
    audio.play()
    await sleep(700);
    audio.play()
    await sleep(60 * 1000);

    reset();
    start();


    document.getElementById('judul').innerHTML = 'breath 15s';
    audio.play()
    await sleep(15 * 1000);

    reset();
    start();

    document.getElementById('judul').innerHTML = 'hold 60s';
    audio.play()
    await sleep(700);
    audio.play()
    await sleep(60 * 1000);

    reset();
    start();


    document.getElementById('judul').innerHTML = 'breath 120s';
    audio.play()
    await sleep(120 * 1000);

    reset();
    start();

    document.getElementById('judul').innerHTML = 'hold as long as you can';
    audio.play()
    await sleep(700);
    audio.play()


  }

  buttonStart.onclick = function () {

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  buttonStop.onclick = function () {
    clearInterval(Interval);
    document.getElementById('button-mulai').style.visibility = 'visible';

  }

  function stop() {
    clearInterval(Interval);
  }

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  }

  function reset() {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  }

  function start() {

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }



  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;

    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

  }


}