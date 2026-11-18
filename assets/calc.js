(function(){
  var W=document.getElementById('cW'),H=document.getElementById('cH'),N=document.getElementById('cN'); if(!W) return;
  function won(v){ return v>=10000 ? (Math.round(v/1000)/10).toLocaleString('ko-KR')+'만' : v.toLocaleString('ko-KR'); }
  function num(el,min){ var v=Math.floor(Math.abs(+el.value||0)); return v<min?min:v; }
  function calc(){ var w=num(W,0),h=num(H,0),n=num(N,1); var ok=w>0&&h>0; var ja=ok?Math.round(w*h/90000*n*10)/10:0;
    document.getElementById('rJa').textContent= ok ? ja.toLocaleString('ko-KR')+'자' : '-';
    document.getElementById('rWon').textContent= ok ? '약 '+won(Math.round(ja*6000))+' ~ '+won(Math.round(ja*10000))+'원' : '가로·세로를 넣어 주세요';
    var ios=/iPhone|iPad|iPod/.test(navigator.userAgent);
    var body='[청년유리 거울 견적 문의] '+(ok? w+'×'+h+'mm '+n+'장 (약 '+ja+'자)' : '거울 크기: ')+'\n▶ 시공 지역(동네까지): \n▶ 층수·엘리베이터: ';
    document.getElementById('smsBtn').href='sms:01029650924'+(ios?'&':'?')+'body='+encodeURIComponent(body); }
  [W,H,N].forEach(function(el){ el.addEventListener('input',calc); }); calc();
})();
