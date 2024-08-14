let textbox = document.getElementById("textbox");
textbox.addEventListener("input", function () {
  var text = this.value;
  var char = text.length;
  document.getElementById("char").innerHTML = char;

  text = text.trim("");
  let words = text.split(" ");
  console.log("words");
  let cleanList = words.filter(function (elm) {
    return elm != "";
  });
  document.getElementById("word").innerHTML = cleanList.length;
});
