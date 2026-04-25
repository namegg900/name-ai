(function(){
  function summarize(session){
    const messages=session?.messages||[];
    const user=messages.filter(m=>m.role==='user').length;
    const ai=messages.filter(m=>m.role!=='user').length;
    const chars=messages.reduce((a,m)=>a+(m.content||'').length,0);
    return {user,ai,chars,total:messages.length};
  }
  window.NameAISessionInsights={summarize};
})();
