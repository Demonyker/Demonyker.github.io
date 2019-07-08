$(document).ready(() => {
  $.getJSON('https://baconipsum.com/api/?callback=?',
    { 'type':'meat-and-filler', 'start-with-lorem': '1', 'paras': '5' },
    (text) => {
      if (text && text.length > 0) {
        for (let i = 0; i < text.length; i += 1) {
          $('.news').append(`<div class="news__block"> 
          <div class="textline textline_purple"></div>
          <div class="news__text">
          <p>${text[i]}</p>
          <p class="news__underline">Read more...</p>
          </div> </div>`);
        }
      }
    });
  $.getJSON('https://picsum.photos/200',
    (img) => {
      console.log(img.url);
    });
});
