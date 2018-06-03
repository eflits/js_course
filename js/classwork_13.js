$('td').filter(':odd')
      .css('background-color', 'green')
      .end()
      .filter(':even')
      .css('background-color', 'green');

$('#print').on('click', function(e) {
        window.print()
      });
$('button').one('click', function(e) {
  $(this).text('12344');
});

$('div input').on('input', function(e) {
  let len = this.value.length;
  $('div span').text('Осталось' + 15 - len);
});
