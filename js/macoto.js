(function(window) {
  var meishi = document.querySelector('.meishi');
  var cvNav = document.querySelector('.cv-navigator');

  function cardFlipHandler() {
    this.classList.toggle('show-back');
  }

  function openCVNavigation() {
    this.classList.toggle('active');
  }

  if(meishi){
    meishi.addEventListener('click', cardFlipHandler);
  // meishi.addEventListener('touchstart', cardFlipHandler);
  }

  if(cvNav){
    cvNav.addEventListener('click', openCVNavigation);
  }
})(this);
