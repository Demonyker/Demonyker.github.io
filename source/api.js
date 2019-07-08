$(document).ready(() => {
  $.getJSON('https://baconipsum.com/api/?callback=?',
    { 'type':'meat-and-filler', 'start-with-lorem': '1', 'paras': '3' },
    (test) => {
      if (test && test.length > 0) {
        $('#baconIpsumOutput').html('');
        for (let i = 0; i < test.length; i += 1) {
          $('#baconIpsumOutput').append(`<p> + ${test[i]} + </p>`);
          $('#baconIpsumOutput').show();
        }
      }
    });
});
