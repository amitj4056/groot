(function (){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var name in names) {

      var ch = names[name].charAt(0).toLowerCase();
      if(ch == 'j')
      {
        byeSpeaker.speak(names[name]);
      }
      else
      {
        helloSpeaker.speak(names[name]);
      }
     
    }
})();
