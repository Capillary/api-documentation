//= require ./lib/_energize
//= require ./app/_lang
//= require ./app/_search
//= require ./app/_toc


/* CUSTOM JS */
$('.tocify-subheader li.tocify-item a').each(function() {
   $(this).attr('title', $(this).text())
});
