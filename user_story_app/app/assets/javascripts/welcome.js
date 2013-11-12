$(function(){


  $.ajax({
    url: '/users/1/stories',
    type: 'GET',
    dataType: 'json'
  })
  .done(function(response) {

    var tileClass = "col-lg-3 col-md-4 col-sm-6 col-xs-12 tile";

    $.each(response, function(index, story) {

        var storyNode = $('<div>');
        storyNode.html(story.as_a);
        storyNode.addClass(tileClass);
        $('#tiles-container').append(storyNode);
    }); // each

  }); // done

  var $user_story_form = $("#user_story_form")

  $user_story_form.on("submit", function(e){
    e.preventDefault();
    $.ajax({
    url: '/users/5/stories.json',
    type: 'POST',
    dataType: 'json',
    data: {story: {
      as_a: $("#as_a").val(),
      i_want_to: $("#i_want_to").val(),
      so_i_can: $("#so_i_can").val() }}
    })
    .done(function(response) {
      console.log(response)
      $user_story_form[0].reset();
    }); // done
  })











}); //ready


