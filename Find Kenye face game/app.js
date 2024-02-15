document.querySelector(".Container img").addEventListener('click', () => {
    const foundTime = new Date().getTime() - starTime;
    const totalTime = foundTime/1000;
    alert(`Found Face in time ${totalTime} Seconds`)
})

const newGame = () => {
    window.starTime = new Date().getTime();
    const totalX = window.screen.width - 45;
    const totalY = window.screen.height - 50;

    const x = Math.round(Math.random() * totalX);
    const y = Math.round(Math.random() * totalY);
    console.log(x, y);

    document.querySelector(".Container img").style.top = y + 'px';
    document.querySelector(".Container img").style.left = y + 'px';
}

newGame()
