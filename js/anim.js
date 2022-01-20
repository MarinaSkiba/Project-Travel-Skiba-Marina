const country = document.querySelectorAll('.country_container');

window.addEventListener('scroll', checkCountry);

checkCountry();

function checkCountry() {
  var triggerBottom = window.innerHeight / 5 * 9;

  country.forEach(country_container => {
    const countryTop = country_container.getBoundingClientRect().top;

    if (countryTop < triggerBottom) {
      country_container.classList.add('_show');
    }
    else {
      country_container.classList.remove('_show');

    };

  });

}