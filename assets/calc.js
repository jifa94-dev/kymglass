(function(){
  var W=document.getElementById('cW'),H=document.getElementById('cH'),N=document.getElementById('cN'); if(!W) return;
  function won(v){ return v>=10000 ? (Math.round(v/1000)/10).toLocaleString('ko-KR')+'만' : v.toLocaleString('ko-KR'); }
  function calc(){ var w=+W.value||0,h=+H.value||0,n=Math.max(1,+N.value||1); var ja=Math.round(w*h/90000*n*10)/10;
    document.getElementById('rJa').textContent=ja.toLocaleString('ko-KR')+'자';
    document.getElementById('rWon').textContent= ja>0 ? '약 '+won(Math.round(ja*6000))+' ~ '+won(Math.round(ja*10000))+'원' : '-';
    var ios=/iPhone|iPad|iPod/.test(navigator.userAgent); var body='[청년유리 거울 견적 문의] '+w+'×'+h+'mm '+n+'장 (약 '+ja+'자)\n▶ 시공 지역(동네까지): \n▶ 층수·엘리베이터: ';
    document.getElementById('smsBtn').href='sms:01029650924'+(ios?'&':'?')+'body='+encodeURIComponent(body); }
  [W,H,N].forEach(function(el){ el.addEventListener('input',calc); }); calc();
})();
