'use strict';
const animation = document.querySelectorAll('.block_animation');

window.addEventListener('scroll', checkAnimation);

checkAnimation();

function checkAnimation() {
  var triggerBottom = window.innerHeight / 5 * 8;

  animation.forEach(block_animation => {
    const blockTop = block_animation.getBoundingClientRect().top;

    if (blockTop < triggerBottom) {
      block_animation.classList.add('_show');
    }
    else {
      block_animation.classList.remove('_show');

    };

  });

}