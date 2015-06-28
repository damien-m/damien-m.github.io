(function(window) {
  var meishi = document.querySelector('.meishi');
  window.bc = meishi;

  meishi.addEventListener('click', function(e){
    this.classList.toggle('show-back');
  });
})(this);
