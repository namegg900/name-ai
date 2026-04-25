(function(){
  function handle(text,state){
    const t=(text||'').trim();
    if(!t.startsWith('/')) return null;
    if(t==='/help') return 'Arahan: /help, /masa, /mode, /sesi';
    if(t==='/masa') return `Masa semasa: ${new Date().toLocaleString('ms-MY')}`;
    if(t==='/mode') return `Mode aktif: ${(state?.getMode?.()||'chat')}`;
    if(t==='/sesi') return `Jumlah sesi: ${(state?.getSessionCount?.()||0)}`;
    return 'Arahan tidak dikenali. Guna /help';
  }
  window.NameAIQuickCommands={handle};
})();
