
// Minimal JS for interactivity: nav toggle, smooth scroll, preloader
document.addEventListener('DOMContentLoaded', function(){
  // Nav toggle
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.querySelector('.main-nav');
  navToggle && navToggle.addEventListener('click', function(){
    mainNav.classList.toggle('open');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href');
      if(href.length>1 && href.startsWith('#')){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
      }
    });
  });

  // Simple preloader (fade out)
  var pre = document.getElementById('preloader');
  if(pre){
    pre.style.opacity = 0;
    setTimeout(function(){ pre.style.display='none'; }, 400);
  }
});
