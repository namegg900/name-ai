(function(){
  const KEY='name_ai_sound';
  function enabled(){ return localStorage.getItem(KEY)!=='off'; }
  function set(v){ localStorage.setItem(KEY,v?'on':'off'); }
  function beep(){
    if(!enabled()) return;
    try{
      const ctx=new (window.AudioContext||window.webkitAudioContext)();
      const o=ctx.createOscillator(); const g=ctx.createGain();
      o.type='sine'; o.frequency.value=740;
      o.connect(g); g.connect(ctx.destination); g.gain.value=0.03;
      o.start(); setTimeout(()=>{o.stop();ctx.close();},120);
    }catch{}
  }
  window.NameAISound={enabled,set,beep};
})();
