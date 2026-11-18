(function(){
  var mb=document.getElementById('menuBtn'), nv=document.getElementById('nav');
  if(mb&&nv){ mb.onclick=function(){ nv.classList.toggle('open'); mb.setAttribute('aria-expanded', nv.classList.contains('open')); }; nv.addEventListener('click',function(e){ if(e.target.tagName==='A') nv.classList.remove('open'); }); }
  var ba=document.getElementById('ba'); if(!ba) return;
  var slides=[].slice.call(ba.querySelectorAll('.ba-slide')), bars=[].slice.call(ba.querySelectorAll('.ba-bars i')), range=ba.querySelector('.ba-range'), cur=0, touched=false, timer=null;
  function pos(v){ var s=slides[cur]; s.querySelector('.ba-clip').style.clipPath='inset(0 0 0 '+v+'%)'; s.querySelector('.ba-handle').style.left=v+'%'; }
  function show(i){ cur=(i+slides.length)%slides.length; slides.forEach(function(s,k){ s.classList.toggle('on',k===cur); }); bars.forEach(function(b,k){ b.classList.toggle('on',k<=cur); }); range.value=50; pos(50); }
  range.addEventListener('input',function(){ touched=true; pos(range.value); });
  ba.querySelector('.ba-prev').onclick=function(){ touched=true; show(cur-1); };
  ba.querySelector('.ba-next').onclick=function(){ touched=true; show(cur+1); };
  show(0);
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){ timer=setInterval(function(){ if(!touched) show(cur+1); },6500); }
})();
