window.onload = () => {
  const buttonNext = document.getElementsByClassName('button__next_arrow');
  const banners = document.getElementsByClassName('banner');
  const buttonPrevious = document.getElementsByClassName('button__previous_arrow');
  const newsBlocks = document.getElementsByClassName('news__block');
  console.log('vot tak');
  if (newsBlocks.length === 1) {
    newsBlocks[0].style.width = '100%';
  }
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
};
