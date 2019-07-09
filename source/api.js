$(document).ready(() => {
  $.getJSON('https://baconipsum.com/api/?callback=?',
    { 'type':'meat-and-filler', 'start-with-lorem': '1', 'paras': '2' },
    (text) => {
      if (text && text.length > 0) {
        for (let i = 0; i < text.length; i += 1) {
          $('.news').append(`<div class="news__block"> 
          <div class="textline textline_purple"></div>
          <div class="news__text">
          <div class="news__photo"><img src="https://picsum.photos/143/133?random=${i}"</div>
          <p>${text[i]}</p>
          <p class="news__underline">Read more...</p>
          </div> </div>`);
        }
      }
    });
});
