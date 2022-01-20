const animation = document.querySelectorAll('.tours');

window.addEventListener('scroll', checkAnimation);

checkAnimation();

function checkAnimation() {
  var triggerBottom = window.innerHeight / 5 * 4;

  animation.forEach(tours => {
    const tourTop = tours.getBoundingClientRect().top;

    if (tourTop < triggerBottom) {
      tours.classList.add('_show');
    }
    else {
      tours.classList.remove('_show');

    };

  });

}