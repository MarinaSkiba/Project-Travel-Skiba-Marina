window.onscroll = () => {
  const header = document.querySelector('.header_nav');
  const Y = window.scrollY;

  if (Y >300) {
    header.classList.add('_fixed');
  } else if (Y < 100)
    header.classList.remove('_fixed');
};