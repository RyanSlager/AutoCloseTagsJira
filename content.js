$(document).ready(function(){

  $("#comment").on("keyup change", function(){
    var comment = $("#comment");

    if(comment.val().length >=10 && comment.val().lastIndexOf('{code:sql}') == (comment.val().length - 10)){
      comment.val(comment.val() + "\n\n{code}");
      comment.caretTo(comment.val().length - 7);
    }
    else if(comment.val().length >=10 && comment.val().lastIndexOf('{code:xml}') == (comment.val().length - 10)){
      comment.val(comment.val() + "\n\n{code}");
      comment.caretTo(comment.val().length - 7);
    }
    else if(comment.val().length >=11 && comment.val().lastIndexOf('{code:java}') == (comment.val().length - 11)){
      comment.val(comment.val() + "\n\n{code}");
      comment.caretTo(comment.val().length - 7);
    }
    //else if(comment.val().length >=11 && comment.val().lastIndexOf('{code}') == (comment.val().length - 6)){
      //comment.val(comment.val() + "\n\n{code}");
      //comment.caretTo(comment.val().length - 7);
    //}
  });
});
