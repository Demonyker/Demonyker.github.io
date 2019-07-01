window.onload = function start() {
    let buttonNext = document.getElementsByClassName('button__next');
    let banners = document.getElementsByClassName('banner');
    for(let i = 0; i < buttonNext.length; i += 1 ) {
        buttonNext[i].onclick = () => {
            banners[i].style.display = "none";
            banners[i+1].style.display = "block";
        }
    }
}