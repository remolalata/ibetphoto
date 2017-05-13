$(document).ready(function() {
  $('#reportModal').draggable();
  $('.flex_grid.credits').flexImages({ rowHeight: 320, maxRows: 29, truncate: true });
  $('.flex_grid.sponsored').flexImages({rowHeight: 160, maxRows: 1, truncate: true });
  $('.flex_grid.search-baby').flexImages({rowHeight: 300, maxRows: 5});
  $('.flex_grid.search-baby').flexImages({rowHeight: 300, maxRows: 5});
  $(".flex_grid.related_photos").flexImages({rowHeight: 125,maxRows: 1})
  $('.flex_grid.sponsored2').flexImages({rowHeight: 160, maxRows: 3 });

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.flex_grid').flexImages({ rowHeight: 320, maxRows: 29, truncate: true });
  })

  $('#id_qs').click(function() {
    $(this).closest('form').toggleClass('active');
  });



  $('#media_container').click(function() {
    $('.overlay').toggleClass('overlay-show');
    $('#media_container h1').toggleClass('dont-show')
  })

  $('#reportModalBtn').click(function(e) {
    e.stopPropagation();
    $('#reportModal').modal('show');
 });

  $('#issue').on('change', function() {
    // $('#one').show();
    if($(this).val() == "4"){
      $('#one').hide();
      $('#two').show();
    }else if($(this).val() == "1"){
      $('#one').hide();
      $('#two').hide();
    }else{
      $('#two').hide();
      $('#one').show();
    }
  });

});
