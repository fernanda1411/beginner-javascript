function main(){
    let colorClass = '';
    let blinking = false;
    let interval;
    
    $('.selector-color').on('click', function(){
      let selectorColor = $(this).attr('class');
      
      switch(selectorColor) {
          
          case "select-color cyan not-selected":
          colorClass = 'cyan';
          break;
          
              case "select-color yellow not-selected":
          colorClass = 'yellow';
          break;
          
          case "select-color magenta not-selected":
          colorClass = 'magenta';
          break;
      }
      
    $(this).removeClass('not-selected');
    $(this).siblings().addClass('not-selected');  
    });
    
    $('.box').on('click', function(){
      $(this).toggleClass(colorClass)
    })
    
    $('.toggle-blink').on('click', function(){
      if(bliking){
        bliking = false;
        clearInterval(interval);
      } else {
        bliking = true;
          if(colorClass){
        $('.toggle-blink').toggleClass('opacity');
        setInterval(function() {
  $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
      }, 100);
       }
    }  
    });
  }
  
  $(document).ready(main);