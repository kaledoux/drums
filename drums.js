function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
}
document.addEventListener('DOMContentLoaded', event => {
  document.body.addEventListener('transitionend', removeTransition);

  document.body.addEventListener('keydown', e => {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
        key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (key) {
      audio.play();
      key.classList.add("playing");
    }
  });
});
