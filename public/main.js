// Generated by CoffeeScript 1.12.4
(function() {
  var main;

  main = function() {
    var result, source;
    source = original.value;
    try {
      result = JSON.stringify(parse(source), null, 2);
    } catch (error) {
      result = error;
      result = "<div class=\"error\">" + result + "</div>";
    }
    return OUTPUT.innerHTML = result;
  };

  window.onload = function() {
    return PARSE.onclick = main;
  };
  
}).call(this);
