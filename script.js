(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav'),hdr=document.querySelector('.site-header');
  btn.addEventListener('click',function(){var o=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!o));nav.classList.toggle('open',!o);});
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){btn.setAttribute('aria-expanded','false');nav.classList.remove('open');});});
  window.addEventListener('scroll',function(){hdr.classList.toggle('scrolled',window.scrollY>12);},{passive:true});
  var els=document.querySelectorAll('.reveal');
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  document.documentElement.classList.add('js-reveal');
  var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(e,i){var sib=[].indexOf.call(e.parentNode.children,e);e.style.transitionDelay=Math.min(sib,5)*70+'ms';io.observe(e);});
})();
