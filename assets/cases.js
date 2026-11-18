(function(){
  var box=document.getElementById('zfilter'); if(!box) return;
  var cards=[].slice.call(document.querySelectorAll('#zlist .zcard')), q=document.getElementById('cq'), cnt=document.getElementById('zcount'), cat='all';
  var p=new URLSearchParams(location.search); if(p.get('q')) q.value=p.get('q');
  function run(){ var ws=q.value.trim().toLowerCase().split(/\s+/).filter(Boolean), n=0;
    cards.forEach(function(c){ var t=(c.getAttribute('data-text')||'').toLowerCase(); var ok=(cat==='all'||c.getAttribute('data-cat')===cat) && ws.every(function(w){ return t.indexOf(w)>=0; }); c.hidden=!ok; if(ok) n++; });
    cnt.textContent='자세히 정리한 사례 '+n+'건'; [].slice.call(box.querySelectorAll('button')).forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-c')===cat); }); }
  box.addEventListener('click',function(e){ var b=e.target.closest('button'); if(!b) return; cat=b.getAttribute('data-c'); run(); });
  q.addEventListener('input',run); document.getElementById('cform').addEventListener('submit',function(e){ e.preventDefault(); run(); });
  run();
})();
