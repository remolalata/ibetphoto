$(document).ready(function() {
  $('.flex_grid.credits').flexImages({ rowHeight: 320, maxRows: 29, truncate: true });
  $('.flex_grid.sponsored').flexImages({rowHeight: 160, maxRows: 1, truncate: true });
  $('.flex_grid.search-baby').flexImages({rowHeight: 300, maxRows: 5});

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.flex_grid').flexImages({ rowHeight: 320, maxRows: 29, truncate: true });
  })

  $('#id_qs').click(function() {
    $(this).closest('form').toggleClass('active');
  });
});
