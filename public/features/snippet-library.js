(function(){
  const KEY='name_ai_snippets';
  function all(){ try{return JSON.parse(localStorage.getItem(KEY))||[];}catch{return [];} }
  function save(title,content){
    const data=all();
    data.unshift({id:Date.now().toString(36),title,content,createdAt:new Date().toISOString()});
    localStorage.setItem(KEY,JSON.stringify(data.slice(0,30)));
  }
  function latest(){ return all()[0]||null; }
  window.NameAISnippets={all,save,latest};
})();
