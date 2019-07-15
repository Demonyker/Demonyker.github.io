window.onload = () => {
  const buttonNext = document.getElementsByClassName('button__next_arrow');
  const banners = document.getElementsByClassName('banner');
  const buttonPrevious = document.getElementsByClassName('button__previous_arrow');
  
  for (let i = 0; i < buttonNext.length; i += 1) {
    buttonNext[i].onclick = () => {
      if (i + 1 !== buttonNext.length) {
        banners[i].style.display = 'none';
        banners[i + 1].style.display = 'flex';
      }
    };
  }
  for (let i = 0; i < buttonPrevious.length; i += 1) {
    buttonPrevious[i].onclick = () => {
      if (i - 1 !== -1) {
        banners[i].style.display = 'none';
        banners[i - 1].style.display = 'flex';
      }
    };
  }
  const news1 = document.getElementsByClassName('news');
  const news = news1[0];

  function promiseAjax() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        }
      };
      xhr.onerror = () => {
        reject(new Error('Nerwork error'));
      };
      xhr.open('GET', 'https://baconipsum.com/api/?callback=?type=meat-and-filler&start-with-lorem=1&paras=3');
      xhr.send();
    });
  }
  promiseAjax().then((jsonString) => {
    const massiveOftext = JSON.parse(jsonString);
    massiveOftext.forEach((text, i) => {
      news.innerHTML =`<div class="news__block"> 
          <div class="textline textline_purple"><span class="textline__text">ABOUT SUPER LOGO</span></div>
          <div class="news__text">
          <img class="news__photo"src="https://picsum.photos/143/133?random=${i}">
          <div class="news__content">
          <p class="news__content_text">${text}</p>
          <p class="news__underline">Read more...</p>
          </div> </div> </div>` + news.innerHTML;
    });
    const newsBlocks = document.getElementsByClassName('news__block');
    if (newsBlocks.length % 2 !== 0) {
      newsBlocks[newsBlocks.length - 1].style.width = '100%';
    }
  }).catch((err) => {
    console.log(err);
  });
};
