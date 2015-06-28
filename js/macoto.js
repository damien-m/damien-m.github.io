(function(window) {
  var meishi = document.querySelector('.meishi');

  function cardFlipHandler(){
    this.classList.toggle('show-back');
  }

  meishi.addEventListener('click', cardFlipHandler);
  meishi.addEventListener('touchstart', cardFlipHandler);
})(this);
