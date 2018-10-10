//= require vendor/autosize
//= require vendor/foundation
//= require vendor/jquery.sticky
//= require vendor/what-input

$(document).foundation();
// $(".top-bar").sticky({zIndex:10});

// $('nav#top-nav > ul').addClass('dropdown menu')
// $('nav#top-nav > ul ul').addClass('menu')

$('header[data-background-url]').each(function() {
  $(this).css('background-image', 'url("' + $(this).data('background-url') + '")')
})

autosize($('textarea.autosize'));

$(document).on('click', '.clickable', function() {
  clickable = document.createElement('a');
  clickable.href = $(this).data('url');

  if (location.hostname !== clickable.hostname) {
    window.open($(this).data('url'));
  } else {
    window.location.href = $(this).data('url');
  }

  return false;
})
