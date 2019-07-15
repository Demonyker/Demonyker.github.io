$(document).ready(() => {
  $.getJSON('https://baconipsum.com/api/?callback=?',
    { 'type':'meat-and-filler', 'start-with-lorem': '1', 'paras': '4' },
    (text) => {
      if (text && text.length > 0) {
        for (let i = 0; i < text.length; i += 1) {
          $('.news').append(`<div class="news__block"> 
          <div class="textline textline_purple"><span class="textline__text">ABOUT SUPER LOGO</span></div>
          <div class="news__text">
          <img class="news__photo"src="https://picsum.photos/143/133?random=${i}">
          <div class="news__content">
          <p class="news__content_text">${text[i]}</p>
          <p class="news__underline">Read more...</p>
          </div> </div> </div>`);
        }
      }
    });
});
