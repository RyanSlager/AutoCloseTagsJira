$(document).ready(function(){

  $(window).keypress(function(e) {
    var tags = ['{code:sql}', '{code:xml}', '{code:java}', '{code}'];
    if(e.which == 112) {
      closeTag(tags);
    }
  });

  $("#comment").on("keyup change", function(){

    var tags = ['{code:sql}', '{code:xml}', '{code:java}', '{code}'];
    var textArea = $("#comment");
    closeTag(tags, textArea);
  });
});

function closeTag(tagNames, textArea){
  var doubleCode;
  //var codeCount = occurrences(textArea.val(), '{code}');
  //console.log(codeCount);
  for (var i = 0; i < tagNames.length; i++){
    var item = tagNames[i];
    if(item != '{code}' && textArea.val().length >= item.length && textArea.val().lastIndexOf(item) == (textArea.val().length - item.length)){
      textArea.val(textArea.val() + "\n\n{code}");
      textArea.caretTo(textArea.val().length - 7);
      //break;
      //return doubleCode = false;
    }
    //TODO:Figure out how this should work for {code}
    // else if(item == '{code}' && textArea.val().length >= item.length && textArea.val().lastIndexOf(item) == (textArea.val().length - item.length) && codeCount % 2 != 0){
    //   textArea.val(textArea.val() + "\n\n{code}");
    //   textArea.caretTo(textArea.val().length - 7);
    //   break;
      //return doubleCode = true;
    }
  }
