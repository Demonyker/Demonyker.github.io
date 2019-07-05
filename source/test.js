const window = Window;
window.onload = () => {
  const document = Document;
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
};

