(function(){
  function setPlusIcon(){
    var i;
    var treeLis = document.getElementsByTagName('li');

    for(i = 0, max = treeLis.length; i < max; i++){
        if(treeLis[i].getElementsByTagName('ul').length){
          treeLis[i].classList.add('Expand');
          treeLis[i].classList.add('Open');
      }
    }

    var mainUl = document.getElementsByTagName('ul')[0];
    mainUl.addEventListener('click',aClick)
  }

  setPlusIcon();
  
  function aClick(e){
    var target = e.target;
    if (target.tagName != 'A'){
      return;
    }
    if(target.parentElement.getElementsByTagName('ul').length){
      e.preventDefault();       
      target.parentElement.classList.toggle('Open');
      target.parentElement.classList.toggle('Close');
    } 
  }       
})();

    