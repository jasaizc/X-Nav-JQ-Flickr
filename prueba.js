var words;

jQuery(document).ready(function() {  
   var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
   
  $("#boton1").click(function(){
   $.getJSON( flickerAPI, {
   tags: $("#Resultado").val(),
   tagmode: "any",
   format: "json"
    })
  
.done(function( data ) {
  words = data;

  $("#boton").click(function(){
    aleat = parseInt(Math.random()*words.items.length) 
    changer(words.items[aleat].media.m) 
  
  });
          
});
});
  function changer (newValue) {
  var element = document.getElementById("imagen1");
  element.style.display = 'inline';
  element.setAttribute('src', newValue);
}
  function cambiafrase()
  {
     var sentence = document.getElementById("res2");
     var newwords = [];
     for(var i=0;i<words.length;i+=1){
       newwords.push(words[i][Math.floor(Math.random() * words[i].length)]);
      }
     sentence.innerHTML = newwords.join(" ");    
  }
});

