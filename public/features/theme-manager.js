(function(){
  const KEY='name_ai_theme';
  const palette=['#ff6b35','#22c55e','#a855f7','#f59e0b','#06b6d4'];
  function apply(color){
    document.documentElement.style.setProperty('--accent',color);
    localStorage.setItem(KEY,color);
  }
  function load(){
    const saved=localStorage.getItem(KEY);
    if(saved) apply(saved);
  }
  function cycle(){
    const current=getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()||palette[0];
    const idx=Math.max(0,palette.indexOf(current));
    const next=palette[(idx+1)%palette.length];
    apply(next);
    return next;
  }
  window.NameAITheme={load,cycle,apply,palette};
})();
