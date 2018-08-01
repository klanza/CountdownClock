let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check to stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display
    console.log(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  console.log(seconds);
}
