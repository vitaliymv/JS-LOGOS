function makeBuffer() {
  var text = '';

  function buffer(piece) {
    if (arguments.length == 0) {
      return text;
    }
    text += piece;
  };

  buffer.clear = function() {
    text = "";
  }

  return buffer;
};

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебе не з'їсть");
alert(buffer());

buffer.clear();

alert(buffer());
